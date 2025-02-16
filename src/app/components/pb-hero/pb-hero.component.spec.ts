import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbHeroComponent } from './pb-hero.component';

describe('PbHeroComponent', () => {
  let component: PbHeroComponent;
  let fixture: ComponentFixture<PbHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PbHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
