import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotdealsPage } from './hotdeals.page';

describe('HotdealsPage', () => {
  let component: HotdealsPage;
  let fixture: ComponentFixture<HotdealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotdealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
