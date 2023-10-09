import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeInrListPage } from './trade-inr-list.page';

describe('TradeInrListPage', () => {
  let component: TradeInrListPage;
  let fixture: ComponentFixture<TradeInrListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInrListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeInrListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
