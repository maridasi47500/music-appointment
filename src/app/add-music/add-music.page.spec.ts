import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMusicPage } from './add-music.page';

describe('AddMusicPage', () => {
  let component: AddMusicPage;
  let fixture: ComponentFixture<AddMusicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
