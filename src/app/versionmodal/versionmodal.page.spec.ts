import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersionmodalPage } from './versionmodal.page';

describe('VersionmodalPage', () => {
  let component: VersionmodalPage;
  let fixture: ComponentFixture<VersionmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VersionmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
