import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCityPage } from './add-city.page';

describe('AddCityPage', () => {
  let component: AddCityPage;
  let fixture: ComponentFixture<AddCityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
