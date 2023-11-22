import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Welcome3Page } from './welcome3.page';

describe('Welcome3Page', () => {
  let component: Welcome3Page;
  let fixture: ComponentFixture<Welcome3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Welcome3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
