import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertylistingsPage } from './propertylistings.page';

describe('PropertylistingsPage', () => {
  let component: PropertylistingsPage;
  let fixture: ComponentFixture<PropertylistingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertylistingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertylistingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
