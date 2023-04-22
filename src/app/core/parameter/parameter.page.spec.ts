import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ParameterPage } from './parameter.page';

describe('ParameterPage', () => {
  let component: ParameterPage;
  let fixture: ComponentFixture<ParameterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParameterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
