import { blah } from '../index';
import { expect } from 'chai';
import 'mocha';
 
describe('First test', () => {
 
  it('should return true', () => {
    const result = blah();
    expect(result).to.equal(true);
  });
 
});
