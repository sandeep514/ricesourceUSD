import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaderComponentPage } from './loader-component.page';

describe('LoaderComponentPage', () => {
  let component: LoaderComponentPage;
  let fixture: ComponentFixture<LoaderComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
