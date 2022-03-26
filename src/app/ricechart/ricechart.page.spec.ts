import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicechartPage } from './ricechart.page';

describe('RicechartPage', () => {
  let component: RicechartPage;
  let fixture: ComponentFixture<RicechartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicechartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicechartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
