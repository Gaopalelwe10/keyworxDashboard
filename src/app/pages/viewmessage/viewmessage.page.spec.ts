import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewmessagePage } from './viewmessage.page';

describe('ViewmessagePage', () => {
  let component: ViewmessagePage;
  let fixture: ComponentFixture<ViewmessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
