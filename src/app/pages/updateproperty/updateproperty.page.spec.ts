import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatepropertyPage } from './updateproperty.page';

describe('UpdatepropertyPage', () => {
  let component: UpdatepropertyPage;
  let fixture: ComponentFixture<UpdatepropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatepropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
