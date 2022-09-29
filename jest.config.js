module.exports = {
  clearMocks: true,
  transform: {
    '.(js|ts)$': ['babel-jest'],
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,
};
