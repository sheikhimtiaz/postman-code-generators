var path = require('path'),
  convert = require('../../lib/index').convert,
  runNewmanTest = require('../../../../test/codegen/newman/newmanTestUtil').runNewmanTest;

describe('convert for different request types', function () {
  var projectPath = path.resolve(__dirname, '../../testProject'),
    testConfig = {
      compileScript: 'dotnet build ' + projectPath,
      runScript: 'dotnet run --project ' + projectPath,
      fileName: projectPath + '/Program.cs'
    },
    options = {
      includeBoilerplate: true
    };
  runNewmanTest(convert, options, testConfig);
});