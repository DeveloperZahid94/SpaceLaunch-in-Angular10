import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchComponent } from './space-xlaunch.component';

describe('SpaceXLaunchComponent', () => {
  let component: SpaceXLaunchComponent;
  let fixture: ComponentFixture<SpaceXLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
