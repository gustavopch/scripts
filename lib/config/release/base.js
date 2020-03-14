const { template } = require('./notes')
const {
  majorGitmojiCodes,
  minorGitmojiCodes,
  patchGitmojiCodes,
} = require('./rules')

module.exports = {
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: majorGitmojiCodes,
          minor: minorGitmojiCodes,
          patch: patchGitmojiCodes,
        },
        releaseNotes: {
          template,
        },
      },
    ],
  ].filter(Boolean),
}
