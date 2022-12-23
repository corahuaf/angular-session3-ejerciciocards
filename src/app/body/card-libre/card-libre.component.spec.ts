import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibreComponent } from './card-libre.component';

describe('CardLibreComponent', () => {
  let component: CardLibreComponent;
  let fixture: ComponentFixture<CardLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLibreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
