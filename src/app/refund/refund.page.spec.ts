import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefundPage } from './refund.page';

describe('RefundPage', () => {
  let component: RefundPage;
  let fixture: ComponentFixture<RefundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
