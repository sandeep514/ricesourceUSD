import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybidsPage } from './mybids.page';

describe('MybidsPage', () => {
  let component: MybidsPage;
  let fixture: ComponentFixture<MybidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
