import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeINRPage } from './trade-inr.page';

describe('TradeINRPage', () => {
  let component: TradeINRPage;
  let fixture: ComponentFixture<TradeINRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeINRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeINRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
