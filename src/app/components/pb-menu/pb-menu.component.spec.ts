import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbMenuComponent } from './pb-menu.component';

describe('PbMenuComponent', () => {
  let component: PbMenuComponent;
  let fixture: ComponentFixture<PbMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PbMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
