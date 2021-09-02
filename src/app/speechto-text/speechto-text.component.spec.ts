import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechtoTextComponent } from './speechto-text.component';

describe('SpeechtoTextComponent', () => {
  let component: SpeechtoTextComponent;
  let fixture: ComponentFixture<SpeechtoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechtoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechtoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
