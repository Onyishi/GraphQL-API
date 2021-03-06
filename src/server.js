// node-graphql/src/server.js

const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const port = process.env.PPORT || 9090

const server = new ApolloServer({ resolvers, typeDefs })

server.listen({ port }, () => console.log(`server runs at: http://localhost:${port}`));