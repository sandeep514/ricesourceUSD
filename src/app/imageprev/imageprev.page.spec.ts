import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageprevPage } from './imageprev.page';

describe('ImageprevPage', () => {
  let component: ImageprevPage;
  let fixture: ComponentFixture<ImageprevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageprevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageprevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
