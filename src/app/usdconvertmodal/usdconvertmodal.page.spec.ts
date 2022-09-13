import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsdconvertmodalPage } from './usdconvertmodal.page';

describe('UsdconvertmodalPage', () => {
  let component: UsdconvertmodalPage;
  let fixture: ComponentFixture<UsdconvertmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdconvertmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsdconvertmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
