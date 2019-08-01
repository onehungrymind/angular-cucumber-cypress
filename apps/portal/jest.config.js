module.exports = {
  name: 'portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
