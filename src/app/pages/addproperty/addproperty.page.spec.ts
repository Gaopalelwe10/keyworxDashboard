import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpropertyPage } from './addproperty.page';

describe('AddpropertyPage', () => {
  let component: AddpropertyPage;
  let fixture: ComponentFixture<AddpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
