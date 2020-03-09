import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddagentPage } from './addagent.page';

describe('AddagentPage', () => {
  let component: AddagentPage;
  let fixture: ComponentFixture<AddagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddagentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
