import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-space-xlaunch',
  templateUrl: './space-xlaunch.component.html',
  styleUrls: ['./space-xlaunch.component.css']
})
export class SpaceXLaunchComponent implements OnInit {

  constructor( private http:HttpClient) { }
 Developer="Zahid Anjum"
  years = [];
 OnloadData:any;
 ReqUrl='https://api.spacexdata.com/v3/launches?limit=100';

  ngOnInit(): void {  
      for (let i = 6; i < 21; i=i+2) {                  //Optional You can Use Static values as Well
      let newName = {
            year1:2000+i,
            year2:2000+i+1
          };         
          this.years.push(newName);        
      }
      //console.log("To Create Dynamic Html For Years --" +this.years);

   //API Call on Page Load Without any filter
    this.http.get(this.ReqUrl).subscribe(
     data =>{
       this.OnloadData=data;
       console.log(this.OnloadData);
     }
   )
  }

  LaunchYearFun(val)                                         //Filter on date
  {
    let params1=new HttpParams().set('launch_year',val)
    this.http.get(this.ReqUrl,{params:params1}).subscribe(
     data =>{
       this.OnloadData=data;   
     });
   

  }
  LaunchProgFun(value)                                        //Filter on Launch Status        
  {
    console.log("LaunchSuccess is Called Here with "+value +" Value");
    let params2=new HttpParams().set('launch_success',value)
    this.http.get(this.ReqUrl,{params:params2}).subscribe(
     data =>{
       this.OnloadData=data;
     });
    console.log(this.OnloadData);
  }
  
  LandSuccessFun(value)     //Filter On Landing Status 
  {
    alert("Cant find the Name Successfull Landing in API")
  }
  
}





















//console.log(this.OnloadData.find(o => o.launch_year=='2008'));
 // this.OnloadData=this.OnloadData.filter(item => item.launch_year==val)