module.exports = {
    preset: 'ts-jest',
    transform: {'^.+\\.ts?$': 'ts-jest', "^.+\\.(js|jsx)$": "babel-jest",},
    testEnvironment: 'node',
    testRegex: '/.*/test/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
