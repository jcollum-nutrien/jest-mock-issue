import {expect, jest, test} from '@jest/globals';

const mockInfo = jest.fn();
import {Logger} from './logger'
jest.mock('./logger', ()=>{
  return {
    info: mockInfo
  }
})
describe('repro', function () {
  it('uses a mock for new logger',()=>{
    const logger = new Logger();
    expect(jest.isMockFunction(logger.info)).toBeTruthy();
  })
});