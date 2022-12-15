import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelSuccessPage } from './cancel-success.page';

describe('CancelSuccessPage', () => {
  let component: CancelSuccessPage;
  let fixture: ComponentFixture<CancelSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
