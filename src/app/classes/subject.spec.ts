import { CategorySubject } from './subject';

describe('Subject', () => {
  it('should create an instance', () => {
    expect(new CategorySubject(1, 'id')).toBeTruthy();
  });
});
