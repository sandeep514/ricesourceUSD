import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellingINRPage } from './selling-inr.page';

describe('SellingINRPage', () => {
  let component: SellingINRPage;
  let fixture: ComponentFixture<SellingINRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingINRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellingINRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
