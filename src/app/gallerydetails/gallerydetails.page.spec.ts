import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GallerydetailsPage } from './gallerydetails.page';

describe('GallerydetailsPage', () => {
  let component: GallerydetailsPage;
  let fixture: ComponentFixture<GallerydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GallerydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
