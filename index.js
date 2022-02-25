const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./models/index');
const { typeDefs } = require('./graphql/typeDefs/appointments_typeDef')
const { resolvers } = require('./graphql/resolvers/appointments_resolver')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`listening on ${url}`);

    sequelize.authenticate().then(() => {
        console.log('Conectado a la base de datos!');
    })
}) 