const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    id: ID
    email: String
    name: String
    active: Boolean
  }

  input CustomerInput {
    email: String
    name: String
    active: Boolean
  }

  type Query {
    findAllCustomers: [Customer]
  }

  type Mutation {
    addCustomer(newCustomer: CustomerInput): Customer
    deleteCustomer(id: ID!): Customer
    findCustomer(id: ID!): Customer
  }
`;

module.exports = typeDefs;
