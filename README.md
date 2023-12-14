# Lab - Class 18

## Project: Serverless API

## Problem Domain
The purpose of this API is to provide a serverless solution for managing a collection of records within a DynamoDB table. Each record represents a person with attributes such as ID, first name, last name, and city. The API supports creating, retrieving, updating, and deleting records through a set of defined endpoints.

## API UML

[Serverless API UML](./assets/peopleUML.png)


### Collaborators
- **ChatGPT by OpenAI**: Used as a programming partner for brainstorming ideas, debugging code, formulating tests, and drafting documentation. ChatGPT's contributions were invaluable in enhancing the efficiency and quality of the development process.

### Setup

#### `.env` requirements (where applicable)

A .env file is included in local repository. A .env-sample file is uploaded to the remote repo so collaborators understand what environmental variables are being used. 

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)


## API Endpoints

The following section outlines the root URL, available routes, expected inputs, and outputs for the API.

### Root URL

The root URL to access the API is:
`https://jlf3ozk3fl.execute-api.us-east-1.amazonaws.com/dev/people`

### Routes

- **POST `/people`**
  - Input: JSON object in the request body containing `firstName`, `lastName`, and `city`.
  - Output: JSON object representing the newly created record, including its `id`.

- **GET `/people`**
  - Input: None required.
  - Output: Array of JSON objects representing all the records in the database.

- **GET `/people/{id}`**
  - Input: `id` parameter in the path to specify the record.
  - Output: JSON object representing one record, identified by `id`.

- **PUT `/people/{id}`**
  - Input: `id` parameter in the path to specify the record, and a JSON object in the request body with fields to update.
  - Output: JSON object representing the updated record, including its `id`.

- **DELETE `/people/{id}`**
  - Input: `id` parameter in the path to specify the record to be deleted.
  - Output: Confirmation message indicating the deletion was successful.

Each route is designed to be intuitive and RESTful, ensuring ease of use and compatibility with standard HTTP operations.
