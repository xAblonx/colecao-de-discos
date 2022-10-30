import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTableItemComponent } from './artist-table-item.component';

describe('ArtistTableItemComponent', () => {
  let component: ArtistTableItemComponent;
  let fixture: ComponentFixture<ArtistTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
