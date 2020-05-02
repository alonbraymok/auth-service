const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type User {
    _id: ID!
    email: String!
    name: String!
    password: String!
  }

  input userInputData {
    email: String!
    name: String!
    password: String!
  }

  type RootMutation{
    createUser(userInput: userInputData) : User!
  }

  schema{
    mutation: RootMutation
  }
`);
