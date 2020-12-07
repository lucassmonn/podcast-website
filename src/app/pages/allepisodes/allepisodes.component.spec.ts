import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllepisodesComponent } from './allepisodes.component';

describe('AllepisodesComponent', () => {
  let component: AllepisodesComponent;
  let fixture: ComponentFixture<AllepisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllepisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllepisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
