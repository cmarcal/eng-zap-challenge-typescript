module.exports = {
	rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: ['**/*.test.(ts|tsx)'],
	moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^Root(.*)$': '<rootDir>/$1',
		'^ComponentsCommon(.*)$': '<rootDir>/components/$1'
	},
	collectCoverage: true,
	setupFilesAfterEnv: [ '<rootDir>/setupTests.ts'],
	coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
	coverageReporters: ['html', 'text', 'text-summary', 'coverage'],
	restoreMocks: true,
  clearMocks: true,
  resetMocks: true
};
