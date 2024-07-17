# Vx-QA-Challenge

# Test Automation Framework Setup

This repository contains test automation scripts using the Playwright and CodeceptJS frameworks with assertions via Chai. This document provides instructions on setting up the environment, running tests, and configuring various options.

**Table of Contents**

	1.	Installation
	    •	Mac
	    •	Windows
	2.	Project Structure
	3.	Running Tests
	4.	Retries
	5.	Browser Switch
	6.	Report

**Installation**

Technologies Used

- [CodeceptJS](https://codecept.io/): A modern end-to-end testing framework for NodeJS.
- [Playwright](https://playwright.dev/): A browser automation library that provides a single API to automate Chromium, Firefox, and WebKit.

Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

Getting Started

Clone the repository: git clone https://github.com/Maro7QA/Vx-QA-Challenge.git

# Mac

1.  Install Node.js and npm:
        •	Install via Homebrew:
            ```brew install node```
        •	Verify the installation:
            ```
            node -v
            npm -v
            ```
2.	Install Playwright:
            ```npm install playwright```
3.	Install CodeceptJS:
            ```npm install codeceptjs```
4.	Install Chai:
            ```npm install chai```

# Windows

1.	Install Node.js and npm:
	    •	Download and install from Node.js official site.
	    •	Verify the installation:
            ```node -v
            npm -v````

2.	Install Playwright:
        ```npm install playwright```

3.	Install CodeceptJS:
        ```npm install codeceptjs```

4.	Install Chai:
        ```npm install chai```


**Project Structure**

•	All test scripts are located in the features/ directory.
•	The main configuration files are codecept.conf.js.

**Running Tests**

1.	Run all tests:
    ```npx codeceptjs run -g @alltests```
2.	Run a specific scenario:
    ``npx codeceptjs run -g @scenario1``
3. Run tests in parallel:
    ``npx codeceptjs run-workers 2 -g @alltests``

**Retries**

To retry a test in case of failure, set the global RETRY variable. The default value is zero (no retries).

1.	Set retries for a specific scenario:
    ``RETRY=1 npx codeceptjs run -g @scenario1``

**Browser Switch**

To run tests in different browsers, set the global BROWSER variable. The default browser is Chromium.

1.	Run tests in Firefox:
    ``BROWSER='firefox' npx codeceptjs run -g @scenario1``

**Report**
    run ``npx codeceptjs run --reporter mochawesome``  to create HTML report in mochawesome-report

Follow these instructions to set up and run your tests efficiently. Adjust the commands and configurations as needed for your specific use case. If you encounter any issues, refer to the official documentation of the respective tools or reach out for support.