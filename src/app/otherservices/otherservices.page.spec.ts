import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherservicesPage } from './otherservices.page';

describe('OtherservicesPage', () => {
  let component: OtherservicesPage;
  let fixture: ComponentFixture<OtherservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherservicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
