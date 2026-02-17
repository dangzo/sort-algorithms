import { describe, it, expect, beforeEach } from 'vitest';
import { useName } from './useName';

describe('useName', () => {
  beforeEach(() => {
    clearNuxtState();
  });

  it('should initialize with the provided name', () => {
    const { name } = useName({ initialName: 'Alice' });
    expect(name.value).toBe('Alice');
  });

  it('should update the name correctly', () => {
    const { name, updateName } = useName({ initialName: 'Bob' });
    updateName('Charlie');
    expect(name.value).toBe('Charlie');
  });

  it('should initialize with an empty string if no initial name is provided', () => {
    const { name } = useName();
    expect(name.value).toBe('different');
  });
});
