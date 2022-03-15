import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import mongoose from 'mongoose'

import graphqlSchema from './graphql/schema'
import graphqlResolvers from './graphql/resolvers'
import { GraphQLError } from 'graphql'

   

const app = express()



app.use('/', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
    formatError(err: GraphQLError) {
        if(!err.originalError) return err
        const message = err.message || 'An error occurred';
        return {message}
    },
    
}))

mongoose.connect('mongodb://localhost:37017/todolist')
    .then(() => {
        app.listen(4444, () => console.log('server is up and running | localhost |4444'))
    }).catch((err) => console.log(err)) 

