import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTableItemComponent } from './album-table-item.component';

describe('AlbumTableItemComponent', () => {
  let component: AlbumTableItemComponent;
  let fixture: ComponentFixture<AlbumTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
