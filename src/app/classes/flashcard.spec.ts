import { Flashcard } from './flashcard';

describe('Flashcard', () => {
  it('should create an instance', () => {
    expect(new Flashcard("Test1", "Test2", 1)).toBeTruthy();
  });
});
