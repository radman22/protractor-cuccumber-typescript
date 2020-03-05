"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['demo.feature'],
    directConnect: true,
    cucumberOpts: {
        // require step definitions
        require: [
            'path/to/step/definitions/**/*.steps.js' // accepts a glob
        ]
    }
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDMUIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxTQUFTLEVBQUUsUUFBUTtJQUVuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUUsY0FBYyxDQUFFO0lBQ3pCLGFBQWEsRUFBQyxJQUFJO0lBRWxCLFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3Q0FBd0MsQ0FBQyxpQkFBaUI7U0FDM0Q7S0FDRjtJQUVELDBFQUEwRTtJQUMxRSxzQ0FBc0M7Q0FFdkMsQ0FBQyJ9