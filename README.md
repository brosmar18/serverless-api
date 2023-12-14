# Lab - Class 18

## Project: Serverless API

## Problem Domain
The purpose of this API is to provide a serverless solution for managing a collection of records within a DynamoDB table. Each record represents a person with attributes such as ID, first name, last name, and city. The API supports creating, retrieving, updating, and deleting records through a set of defined endpoints.

## API UML

[Serverless API UML](./assets/peopleUML.png)

## DynamoDB Deployment Link: 
[DynamoDB Deployed](https://jlf3ozk3fl.execute-api.us-east-1.amazonaws.com/dev/people)

### Collaborators
- **ChatGPT by OpenAI**: Used as a programming partner for brainstorming ideas, debugging code, formulating tests, and drafting documentation. ChatGPT's contributions were invaluable in enhancing the efficiency and quality of the development process.

### Setup

#### `.env` requirements (where applicable)

A .env file is included in local repository. A .env-sample file is uploaded to the remote repo so collaborators understand what environmental variables are being used. 

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

## Features

The "DynamoDB: people" API boasts a collection of features that allow for seamless management of person records within an AWS DynamoDB table. The API provides a comprehensive set of endpoints for CRUD operations, each one designed to integrate smoothly with AWS services.

### AWS Process Overview

- **API Gateway Setup**: Initiate the process by creating an API Gateway named "people-router". This serves as the entry point for the client requests to interact with the API.

- **DynamoDB Table Creation**: Establish a DynamoDB table titled "people", designed to store the records. Each record encompasses attributes such as ID, first name, last name, and city, which align with the structured schema expected by the API.

- **Lambda Functions**: Implement a series of AWS Lambda functions: `handleCreate`, `handleRead`, `handleUpdate`, and `handleDelete`. Each function is dedicated to a specific CRUD operation, providing the logic necessary to interact with the DynamoDB table.

- **Permissions**: Assign the appropriate permissions to the Lambda functions, in this case, `AmazonDynamoDBFullAccess`, which grants full access to the DynamoDB resources required for the operations.

- **Testing**: Conduct thorough tests of the Lambda functions through the API Gateway to ensure reliability and correctness of the API. This testing phase is crucial to validate the behavior of each endpoint under various scenarios.

By integrating these features and following the AWS process, the API facilitates robust data management capabilities, catering to the needs of applications requiring serverless architectures and database interactions.

