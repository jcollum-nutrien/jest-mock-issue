```sh

$ yt
yarn run v1.22.15
$ jest
 FAIL  ./logger.spec.ts
  ● Test suite failed to run

    ReferenceError: Cannot access 'mockInfo' before initialization

       5 | jest.mock('./logger', ()=>{
       6 |   return {
    >  7 |     info: mockInfo
         |           ^
       8 |   }
       9 | })
      10 | describe('repro', function () {

      at mockInfo (logger.spec.ts:7:11)
      at Object.<anonymous> (logger.spec.ts:4:1)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.274 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```