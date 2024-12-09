module.exports = {
  preset: 'react-native',
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation|@react-native-async-storage/async-storage|react-native-flash-message|expo|@expo/vector-icons|react-native/Libraries/Animated/NativeAnimatedHelper/*)',
  ],
};
