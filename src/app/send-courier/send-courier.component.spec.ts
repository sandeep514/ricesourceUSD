import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendCourierComponent } from './send-courier.component';

describe('SendCourierComponent', () => {
  let component: SendCourierComponent;
  let fixture: ComponentFixture<SendCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCourierComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
