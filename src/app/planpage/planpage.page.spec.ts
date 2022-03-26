import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanpagePage } from './planpage.page';

describe('PlanpagePage', () => {
  let component: PlanpagePage;
  let fixture: ComponentFixture<PlanpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
