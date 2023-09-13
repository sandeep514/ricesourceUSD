import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyInrPage } from './buy-inr.page';

describe('BuyInrPage', () => {
  let component: BuyInrPage;
  let fixture: ComponentFixture<BuyInrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyInrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyInrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
