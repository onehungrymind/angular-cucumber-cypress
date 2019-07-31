import { async, TestBed } from '@angular/core/testing';
import { CoreStateModule } from './core-state.module';

describe('CoreStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreStateModule).toBeDefined();
  });
});
