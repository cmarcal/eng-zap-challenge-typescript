module.exports = {
	// preset: 'ts-jest',
	rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/','next/'],
	transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
	},
	testMatch: ['**/__tests__/**/*.ts?(x)', '**/*.test.ts?(x)'],
	moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
	collectCoverage: true,
	setupFilesAfterEnv: [ '<rootDir>/setupTests.ts'],
	coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
	coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
	restoreMocks: true,
  clearMocks: true,
  resetMocks: true,
	globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    },
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.(js|jsx|ts|tsx)$'
  ],

};
