import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectsPage } from './prospects.page';

describe('ProspectsPage', () => {
  let component: ProspectsPage;
  let fixture: ComponentFixture<ProspectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
