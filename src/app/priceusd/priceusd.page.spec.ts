import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceusdPage } from './priceusd.page';

describe('PriceusdPage', () => {
  let component: PriceusdPage;
  let fixture: ComponentFixture<PriceusdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceusdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceusdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
