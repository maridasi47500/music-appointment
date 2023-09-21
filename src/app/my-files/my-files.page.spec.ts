import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFilesPage } from './my-files.page';

describe('MyFilesPage', () => {
  let component: MyFilesPage;
  let fixture: ComponentFixture<MyFilesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
