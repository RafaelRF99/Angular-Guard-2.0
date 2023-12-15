import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunComponent } from './commun.component';

describe('CommunComponent', () => {
  let component: CommunComponent;
  let fixture: ComponentFixture<CommunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunComponent]
    });
    fixture = TestBed.createComponent(CommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
