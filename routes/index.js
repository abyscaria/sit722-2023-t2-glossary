var express = require('express');
var router = express.Router();


const glossary = [
  {'ID': 1, 'Term': 'DevOps', 
  'Description': 'The term “DevOps” originates from the combination of two words— Development and Operations, two of the most important components of any software development cycle. DevOps can be defined as a software development practice, directed towards agile development and efficient delivery of high-quality software, which it achieves by automating and integrating several aspects of application development (programming, version control, etc.) and IT operations (testing, debugging, packaging, and deploying to production, etc.). ', 
  'References':'Sharma, A. (2021, November 16). What is Devops | A Comprehensive Guide to DevOps. Scaler Topics. https://www.scaler.com/topics/what-is-devops/'},
  {'ID': 2, 'Term': 'Continuous Development', 
  'Description': 'Continuous Development is a key aspect of DevOps that involves the continuous improvement and delivery of software. It is a software development practice that focuses on the constant delivery of code changes and updates in small, incremental stages. This approach enables developers to quickly test and validate their code changes, and then deliver them to users with greater speed and frequency.', 
  'References':'Sharma, A. (2021, November 16). What is Devops | A Comprehensive Guide to DevOps. Scaler Topics. https://www.scaler.com/topics/what-is-devops/'}, 
  {'ID': 3, 'Term': 'Continuous Integration', 
  'Description': 'Continuous Integration (CI) is a key practice in the DevOps approach to software development that involves the continuous merging of code changes into a central repository. The goal of CI is to enable developers to detect and address any issues in the code as early as possible before they become more costly and time-consuming to fix.',
  'References':'Sharma, A. (2021, November 16). What is Devops | A Comprehensive Guide to DevOps. Scaler Topics. https://www.scaler.com/topics/what-is-devops/'},
  {'ID': 4, 'Term': 'Continuous Testing', 
  'Description': 'Continuous Testing is a key aspect of DevOps that involves the ongoing and automated testing of software throughout the development process. It is a software development practice that aims to ensure that code changes are thoroughly tested, validated, and verified and that any issues are identified and resolved as early as possible in the development cycle.',
  'References':'Sharma, A. (2021, November 16). What is Devops | A Comprehensive Guide to DevOps. Scaler Topics. https://www.scaler.com/topics/what-is-devops/'},
  {'ID': 5, 'Term': 'Automated Delivery Pipeline', 
  'Description': 'The automated Delivery Pipeline is a critical component of DevOps that involves the automated and continuous delivery of software updates to production environments. It is a software delivery practice that enables teams to streamline the release process, reduce errors and downtime, and deliver updates more quickly and reliably.',
  'References':'Sharma, A. (2021, November 16). What is Devops | A Comprehensive Guide to DevOps. Scaler Topics. https://www.scaler.com/topics/what-is-devops/'},
  {'ID': 6, 'Term': 'Lead time for Code Change', 
  'Description': 'One of the critical DevOps metrics to track is lead time for changes. Not to be confused with cycle time (discussed below), lead time for changes is the length of time between when a code change is committed to the trunk branch and when it is in a deployable state. For example, when code passes all necessary pre-release tests. automated Delivery Pipeline is a critical component of DevOps that involves the automated and continuous delivery of software updates to production environments. It is a software delivery practice that enables teams to streamline the release process, reduce errors and downtime, and deliver updates more quickly and reliably.',
  'References':'Atlassian. (n.d.). 4 Key DevOps Metrics to Know. Atlassian. Retrieved July 19, 2023, from https://www.atlassian.com/devops/frameworks/devops-metrics#:~:text=Lead%20time%20for%20changes&text=Not%20to%20be%20confused%20with'},
  {'ID': 7, 'Term': 'Change Failure Rate', 
  'Description': 'The change failure rate is the percentage of code changes that require hot fixes or other remediation after production. This does not measure failures caught by testing and fixed before code is deployed.',
  'References':'Atlassian. (n.d.). 4 Key DevOps Metrics to Know. Atlassian. Retrieved July 19, 2023, from https://www.atlassian.com/devops/frameworks/devops-metrics#:~:text=Lead%20time%20for%20changes&text=Not%20to%20be%20confused%20with'},
  {'ID': 8, 'Term': 'Deployment Frequency', 
  'Description': 'Understanding the frequency of how often new code is deployed into production is critical to understanding DevOps success. Many practitioners use the term “delivery” to mean code changes that are released into a pre-production staging environment, and reserve “deployment” to refer to code changes that are released into production.',
  'References':'Atlassian. (n.d.). 4 Key DevOps Metrics to Know. Atlassian. Retrieved July 19, 2023, from https://www.atlassian.com/devops/frameworks/devops-metrics#:~:text=Lead%20time%20for%20changes&text=Not%20to%20be%20confused%20with'},
  {'ID': 9, 'Term': 'Mean Time to Recovery (MTTR)', 
  'Description': 'Mean time to recovery (MTTR) measures how long it takes to recover from a partial service interruption or total failure. This is an important metric to track, regardless of whether the interruption is the result of a recent deployment or an isolated system failure. ',
  'References':'Atlassian. (n.d.). 4 Key DevOps Metrics to Know. Atlassian. Retrieved July 19, 2023, from https://www.atlassian.com/devops/frameworks/devops-metrics#:~:text=Lead%20time%20for%20changes&text=Not%20to%20be%20confused%20with'},
  {'ID': 10, 'Term': 'Cycle Time Reports', 
  'Description': 'Cycle time reports allow project leads to establish a baseline for the development pipeline that can be used to evaluate future processes. When teams optimize for cycle time, developers typically have less work in progress and fewer inefficient workflows.',
  'References':'Atlassian. (n.d.). 4 Key DevOps Metrics to Know. Atlassian. Retrieved July 19, 2023, from https://www.atlassian.com/devops/frameworks/devops-metrics#:~:text=Lead%20time%20for%20changes&text=Not%20to%20be%20confused%20with'},

];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'Welcome to my Website showing a collection of DevOps Terms and brief description', glossary:glossary });
});

module.exports = router;
