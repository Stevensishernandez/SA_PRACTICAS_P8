 const sonarqubeScanner = require('sonarqube-scanner');
 sonarqubeScanner({
 serverUrl: 'http://localhost:9000',
 options: {
   'sonar.sources': 'src',
   'sonar.tests': 'src',
   'sonar.projectKey': 'j',
   'sonar.host.url=http':'http://localhost:9000',
   'sonar.login':'02983fc75607c7827d26272f2202864a662d95b8',
   'sonar.inclusions': 'src/**/*.ts', // Entry point of your code
   'sonar.test.inclusions': 'src/**/*.spec.ts,src/**/*.spec.jsx',
   },
 }, () => {
 console.log('Error Occurred while scanning');                    
 });
