import {expect, jest} from '@jest/globals';
import {Logger} from './logger'

const mockInfo = jest.fn();
jest.mock('./logger', () => {
  return {
    Logger: jest.fn().mockImplementation(() => {
      return {
        info: mockInfo
      }
    })
  }
});

describe('repro', function () {
  it('uses a mock for new logger',()=>{
    const logger = new Logger('debug');
    expect(jest.isMockFunction(logger.info)).toBeTruthy();
  })
});

