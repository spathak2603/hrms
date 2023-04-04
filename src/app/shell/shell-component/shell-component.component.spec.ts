import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponentComponent } from './shell-component.component';

describe('ShellComponentComponent', () => {
  let component: ShellComponentComponent;
  let fixture: ComponentFixture<ShellComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
