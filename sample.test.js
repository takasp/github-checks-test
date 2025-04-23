import { describe, it, expect } from 'vitest';
import { add } from './sample.js';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
  it('adds zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});
