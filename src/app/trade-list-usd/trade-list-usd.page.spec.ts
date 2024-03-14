import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeListUsdPage } from './trade-list-usd.page';

describe('TradeListUsdPage', () => {
  let component: TradeListUsdPage;
  let fixture: ComponentFixture<TradeListUsdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeListUsdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeListUsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
