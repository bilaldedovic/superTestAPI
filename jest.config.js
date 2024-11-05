/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset:"ts-jest",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  reporters: [ "default", ["jest-junit",{
      outputDirectory: "reports/junitReports/"
  }],

  ["jest-html-reporters",{
    publicPath: "reports/htmlReports/"

  }]

]

};