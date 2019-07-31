module.exports = {
  name: 'core-state',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/core-state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
