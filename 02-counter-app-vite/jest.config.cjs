module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js'],
    verbose: true,
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
}