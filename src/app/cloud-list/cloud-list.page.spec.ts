import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudListPage } from './cloud-list.page';

describe('CloudListPage', () => {
  let component: CloudListPage;
  let fixture: ComponentFixture<CloudListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CloudListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
