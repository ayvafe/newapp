const { gql } = require('apollo-server');

const User = gql`
  type User {
    id: ID!
    age: Int!
    username: String!
    password: String!
    email: String!
    firstname: String!
    lastname: String!
    birthdate: String!
    token: String!
  }
  type Subscription{
    userUpdate: User!
  }
  input RegisterUserInput {
    username: String!
    password: String!
    firstname: String!
    lasstname: String!
    email: String!
    birthdate: String!
  }
  type Query {
    user: [User]
  }
  type Mutation {
    authenticate(username: String!, password: String!): User!
    register(user: RegisterUserInput!): User!
  }
`;

module.exports = User;
