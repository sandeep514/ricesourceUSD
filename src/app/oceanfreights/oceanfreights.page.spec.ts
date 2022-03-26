import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OceanfreightsPage } from './oceanfreights.page';

describe('OceanfreightsPage', () => {
  let component: OceanfreightsPage;
  let fixture: ComponentFixture<OceanfreightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanfreightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OceanfreightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
