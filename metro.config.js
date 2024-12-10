const exclusionList = require('metro-config/src/defaults/exclusionList');
const {getDefaultConfig} = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Blacklist test files
  config.resolver.blacklistRE = exclusionList([
    /.*\.test\.tsx$/,
    /.*\.spec\.tsx$/,
  ]);

  // Allow importing asset files
  config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif', 'svg');

  return config;
})();
