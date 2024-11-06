# API Testing Course Documentation

## Introduction to API Testing

### What is API Testing?

API testing focuses on testing the business logic, data responses, performance, and security of programming interfaces [1].

### Types of API Testing

1. Functionality testing - Testing the business logic of the application
2. Load testing - Determining system performance under specific expected load
3. Security testing - Checking if APIs are secure from external threats
4. Penetration testing - Finding security vulnerabilities that attackers could exploit
5. Negative testing - Ensuring APIs can handle invalid/wrong inputs

### Advantages of API Testing

- Early app access - Application can be accessed once the core logic is built
- Test speed and coverage - Tests are faster than browser tests and can cover more test coverage
- Language independent - Data is exchanged via XML or JSON, allowing tests to be written in any language
- Easier maintenance - API changes are done less frequently than UI changes, making tests less flaky and more reliable

## HTTP Methods and Status Codes

### HTTP Methods

- GET - Retrieve resources from a server
- POST - Add new resources to a server
- PUT - Edit/update existing resources on a server
- DELETE - Delete resources from a server

### HTTP Response Status Codes

- 100 - Informational responses
- 200 - Successful responses
- 300 - Redirection messages
- 400 - Client error responses
- 500 - Server error responses

## API Testing Tools

For this course, we will use:
- TypeScript
- HTTP Library - SuperTest
- Test Runner - Jest

## Setting Up the Framework

1. Install dependencies:
bash npm install jest --save-dev npm install supertest --save-dev npm install -D typescript


2. Install TypeScript definitions:
bash npm install --save-dev @types/jest npm install --save @types/supertest


3. Create Jest configuration file:
bash npx ts-jest config:init



## API Fundamentals

### REST API

REST stands for Representational State Transfer. It defines a set of constraints for creating APIs [1].

Key architectural constraints:
1. Client-server separation
2. Uniform interface
3. Stateless
4. Cacheable
5. Layered system
6. Code on demand

### HTTP Request Structure

An HTTP request contains:
- Base URI
- HTTP Methods
- Headers
- Body (optional)

### CRUD Operations

CREATE - POST
READ - GET
UPDATE - PUT
DELETE - DELETE

## API Testing Process

1. Manual testing to verify API functionality
2. Write automated tests using SuperTest and Jest

## Test Organization

Organize tests in the following order:
1. POST test - Create required data
2. GET test - Retrieve created data
3. PUT test - Update previously created data
4. DELETE test - Delete previously created data

Benefits of this infrastructure:
- Tests can be executed multiple times
- Ensures data integrity and consistency
- Suitable for CI integration and automation

## Negative Testing

Negative testing involves testing for unexpected or invalid inputs.

Types of negative testing:
1. Schema validation testing
2. Business logic validation

## Authentication Testing

Common authentication methods:
- Bearer Tokens
- OAuth 2.0
- API Keys
- Basic Authentication
- JSON Web Tokens (JWT)

For this framework, we'll focus on bearer token authentication.

## File Upload Testing

File upload testing is crucial for many applications.

Key points:
- Uses multipart/form-data content-type
- Requires careful handling of parameters like accept and -F
- Different approaches for single vs multiple file uploads

## Reporting

We'll cover two reporting methods:
1. JUnit reports for CI/CD pipeline
2. HTML reports for visual representation

Implementation strategy:
- Use jest-junit-reporter for JUnit reports
- Use jest-html-reporters for HTML reports
- Configure Jest to generate reports
- Store reports in designated directories

## Continuous Integration with Jenkins

Jenkins is an open-source automation server for building, testing, and deploying software.

Steps for integrating tests with Jenkins:
1. Install Jenkins
2. Set up a new project
3. Connect GitHub repository
4. Run tests on Jenkins
5. Generate and publish reports

Best practices:
- Use environment variables for sensitive information
- Implement proper error handling and logging
- Regularly review and refactor test code
- Ensure tests are independent and idempotent
- Use hooks effectively for setup and teardown

By following this documentation, developers can set up a robust API testing framework using TypeScript, SuperTest, and Jest, with proper reporting and CI/CD integration.
