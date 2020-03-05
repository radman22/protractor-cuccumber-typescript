"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    directConnect: true,
    cucumberOpts: {
        //tags:'@CalculatorTesting',
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefination/*.js' // accepts a glob
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: '../tmp/cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFFeEMsUUFBQSxNQUFNLEdBQVc7SUFFeEIsWUFBWSxFQUFFO1FBQ2QsV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxTQUFTLEVBQUUsUUFBUTtJQUVuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUUsMEJBQTBCLENBQUU7SUFHckMsYUFBYSxFQUFDLElBQUk7SUFFbEIsWUFBWSxFQUFFO1FBQ1osNEJBQTRCO1FBQzVCLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFO1lBRVAsdUJBQXVCLENBQUMsaUJBQWlCO1NBQzFDO0tBQ0Y7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUczQixDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLHNDQUFzQztDQUV2QyxDQUFDIn0=