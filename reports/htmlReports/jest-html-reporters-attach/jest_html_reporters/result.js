window.jest_html_reporters_callback__({"numFailedTestSuites":2,"numFailedTests":2,"numPassedTestSuites":3,"numPassedTests":16,"numPendingTestSuites":0,"numPendingTests":10,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":5,"numTotalTests":28,"startTime":1730840304632,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":1,"numPendingTests":5,"numTodoTests":0,"perfStats":{"end":1730840308387,"runtime":3017,"slow":false,"start":1730840305370},"testFilePath":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\poc.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["POC Tests","Get requests"],"duration":null,"failureMessages":[],"fullName":"POC Tests Get requests GET /posts","status":"pending","title":"GET /posts"},{"ancestorTitles":["POC Tests","Get requests"],"duration":null,"failureMessages":[],"fullName":"POC Tests Get requests GET /comments with query parameters","status":"pending","title":"GET /comments with query parameters"},{"ancestorTitles":["POC Tests","POST requests"],"duration":null,"failureMessages":[],"fullName":"POC Tests POST requests POST /posts","status":"pending","title":"POST /posts"},{"ancestorTitles":["POC Tests","PUT requests"],"duration":null,"failureMessages":[],"fullName":"POC Tests PUT requests PUT /posts/{id}","status":"pending","title":"PUT /posts/{id}"},{"ancestorTitles":["POC Tests","PATCH requests"],"duration":null,"failureMessages":[],"fullName":"POC Tests PATCH requests PATCH /posts/{id}","status":"pending","title":"PATCH /posts/{id}"},{"ancestorTitles":["POC Tests","DELETE requests"],"duration":653,"failureMessages":[],"fullName":"POC Tests DELETE requests DELETE /posts/{id}","status":"passed","title":"DELETE /posts/{id}"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":1,"numTodoTests":0,"perfStats":{"end":1730840309461,"runtime":4227,"slow":false,"start":1730840305234},"testFilePath":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\uploadImages.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Upload images","Test single image upload"],"duration":null,"failureMessages":[],"fullName":"Upload images Test single image upload POST -  single file upload ","status":"pending","title":"POST -  single file upload "},{"ancestorTitles":["Upload images","Test multiple image upload"],"duration":1770,"failureMessages":[],"fullName":"Upload images Test multiple image upload POST -  multiple file upload ","status":"passed","title":"POST -  multiple file upload "}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":4,"numTodoTests":0,"perfStats":{"end":1730840309943,"runtime":4633,"slow":false,"start":1730840305310},"testFilePath":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\brandsTests.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["GET Request "],"duration":null,"failureMessages":[],"fullName":"GET Request  Tests brands GET ALL and assert, GET /brands","status":"pending","title":"Tests brands GET ALL and assert, GET /brands"},{"ancestorTitles":["GET individual request "],"duration":null,"failureMessages":[],"fullName":"GET individual request  Tests brands GET specific ID and assert, GET /brands/:id","status":"pending","title":"Tests brands GET specific ID and assert, GET /brands/:id"},{"ancestorTitles":["POST request"],"duration":null,"failureMessages":[],"fullName":"POST request Test POST /brands request","status":"pending","title":"Test POST /brands request"},{"ancestorTitles":["PUT request"],"duration":null,"failureMessages":[],"fullName":"PUT request PUT request PUT /brands/{id}","status":"pending","title":"PUT request PUT /brands/{id}"},{"ancestorTitles":["PUT request","Delete brand id "],"duration":2325,"failureMessages":[],"fullName":"PUT request Delete brand id  DELETE /brand/:id","status":"passed","title":"DELETE /brand/:id"}]},{"numFailingTests":1,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1730840314034,"runtime":8930,"slow":true,"start":1730840305104},"testFilePath":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\categoriesTest.spec.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mCategories › Update categories › PUT /categories\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n    Expected: \u001b[32m\"testitting this u\"\u001b[39m\n    Received: \u001b[31mundefined\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 64 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 65 |\u001b[39m             console\u001b[33m.\u001b[39mlog(resPUT\u001b[33m.\u001b[39mbody)\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 66 |\u001b[39m             expect(resPUT\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mtoEqual(updated\u001b[33m.\u001b[39mname)\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                      \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 67 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 68 |\u001b[39m         })\u001b[22m\n\u001b[2m     \u001b[90m 69 |\u001b[39m     })\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2m\u001b[0m\u001b[36mspecs/categoriesTest.spec.ts\u001b[39m\u001b[0m\u001b[2m:66:38\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fulfilled (\u001b[22m\u001b[2m\u001b[0m\u001b[36mspecs/categoriesTest.spec.ts\u001b[39m\u001b[0m\u001b[2m:5:58)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Categories"],"duration":2000,"failureMessages":[],"fullName":"Categories GET /categories","status":"passed","title":"GET /categories"},{"ancestorTitles":["Categories","Create Categories"],"duration":592,"failureMessages":[],"fullName":"Categories Create Categories POST /categories","status":"passed","title":"POST /categories"},{"ancestorTitles":["Categories","Update categories"],"duration":578,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32m\"testitting this u\"\u001b[39m\nReceived: \u001b[31mundefined\u001b[39m\n    at C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\categoriesTest.spec.ts:66:38\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\categoriesTest.spec.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Categories Update categories PUT /categories","status":"failed","title":"PUT /categories"},{"ancestorTitles":["Categories","Delete categories"],"duration":579,"failureMessages":[],"fullName":"Categories Delete categories DELETE /categories","status":"passed","title":"DELETE /categories"}]},{"numFailingTests":1,"numPassingTests":10,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1730840320923,"runtime":15759,"slow":true,"start":1730840305164},"testFilePath":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\brandsTestsRewritten.spec.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mBrands › Create brands › Business Logic - brand does not exist on false id\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m404\u001b[39m\n    Received: \u001b[31m422\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 103 |\u001b[39m         \u001b[22m\n\u001b[2m     \u001b[90m 104 |\u001b[39m               \u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 105 |\u001b[39m                 expect(req\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoBe(\u001b[35m404\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m     |\u001b[39m                                        \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 106 |\u001b[39m                 expect(req\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39merror)\u001b[33m.\u001b[39mtoEqual(\u001b[32m\"Brand not found.\"\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m 107 |\u001b[39m                 \u001b[22m\n\u001b[2m     \u001b[90m 108 |\u001b[39m             })\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2m\u001b[0m\u001b[36mspecs/brandsTestsRewritten.spec.ts\u001b[39m\u001b[0m\u001b[2m:105:40\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fulfilled (\u001b[22m\u001b[2m\u001b[0m\u001b[36mspecs/brandsTestsRewritten.spec.ts\u001b[39m\u001b[0m\u001b[2m:10:58)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Brands","GET Request "],"duration":2294,"failureMessages":[],"fullName":"Brands GET Request  Tests brands GET ALL and assert, GET /brands","status":"passed","title":"Tests brands GET ALL and assert, GET /brands"},{"ancestorTitles":["Brands","Create brands"],"duration":3,"failureMessages":[],"fullName":"Brands Create brands Test POST /brands request","status":"passed","title":"Test POST /brands request"},{"ancestorTitles":["Brands","Create brands"],"duration":454,"failureMessages":[],"fullName":"Brands Create brands Schema Test - name is mandatory field","status":"passed","title":"Schema Test - name is mandatory field"},{"ancestorTitles":["Brands","Create brands"],"duration":381,"failureMessages":[],"fullName":"Brands Create brands Schema Test - minimum char length for name > 1 ","status":"passed","title":"Schema Test - minimum char length for name > 1 "},{"ancestorTitles":["Brands","Create brands"],"duration":462,"failureMessages":[],"fullName":"Brands Create brands Business Logic - duplicating entries are not allowed","status":"passed","title":"Business Logic - duplicating entries are not allowed"},{"ancestorTitles":["Brands","Create brands"],"duration":1476,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m404\u001b[39m\nReceived: \u001b[31m422\u001b[39m\n    at C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\brandsTestsRewritten.spec.ts:105:40\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\specs\\brandsTestsRewritten.spec.ts:10:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Brands Create brands Business Logic - brand does not exist on false id","status":"failed","title":"Business Logic - brand does not exist on false id"},{"ancestorTitles":["Brands","Create brands"],"duration":1241,"failureMessages":[],"fullName":"Brands Create brands Schema Test - maximum char length for name > 30 is not accepted and description must be string ","status":"passed","title":"Schema Test - maximum char length for name > 30 is not accepted and description must be string "},{"ancestorTitles":["Brands","Create brands"],"duration":1416,"failureMessages":[],"fullName":"Brands Create brands Business Logic validation - not able to update and delete brands that does not exist","status":"passed","title":"Business Logic validation - not able to update and delete brands that does not exist"},{"ancestorTitles":["Brands","GET individual brand"],"duration":468,"failureMessages":[],"fullName":"Brands GET individual brand Tests brands GET specific ID and assert, GET /brands/:id","status":"passed","title":"Tests brands GET specific ID and assert, GET /brands/:id"},{"ancestorTitles":["Brands","PUT request"],"duration":582,"failureMessages":[],"fullName":"Brands PUT request PUT request PUT /brands/{id}","status":"passed","title":"PUT request PUT /brands/{id}"},{"ancestorTitles":["Brands","Delete brand id "],"duration":563,"failureMessages":[],"fullName":"Brands Delete brand id  DELETE /brand/:id","status":"passed","title":"DELETE /brand/:id"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":15,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\node_modules\\jest-junit\\index.js",{"outputDirectory":"reports/junitReports/"}],["C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"reports/htmlReports/"}]],"rootDir":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting","runTestsByPath":false,"seed":-1391521263,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"C:\\Users\\BilalDedovic\\Desktop\\Bilal\\apiTesting\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1730840321176,"_reporterOptions":{"publicPath":"reports/htmlReports/","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})