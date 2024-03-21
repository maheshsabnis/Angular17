import { Category } from './category';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Category(0,'',0)).toBeTruthy();
  });
});
