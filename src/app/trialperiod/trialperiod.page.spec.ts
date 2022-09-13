import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrialperiodPage } from './trialperiod.page';

describe('TrialperiodPage', () => {
  let component: TrialperiodPage;
  let fixture: ComponentFixture<TrialperiodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialperiodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrialperiodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
