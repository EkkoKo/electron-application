import cors from 'cors';
import express from 'express'
import { ApolloServer, gql,  } from 'apollo-server-express'
import { IResolvers } from 'graphql-tools'
import { v4 as uuidv4 } from 'uuid'

const app = express()

// app.use(cors)

const schema = gql`

    type Query {
        users: [User!]
        user(id: ID!): User
        me: User
        messages: [Message!]!
        message(id: ID!): Message!
    }

    type Mutation {
        createMessage(text: String!): Message!
        createUser(user: User!): Boolean!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Message {
        id: ID!
        text: String!
        user: User!
    }


`

const users: user[] =
[
    {
        id: "1234",
        username: 'Guy Ko',
        email: 'guyko@gmail.com'
    },
    {
        id: "12345",
        username: 'What Ko',
        email: 'whatko@gmail.com'
    }
]

const messages : message[] = [
    {
        id: '1234',
        text: 'Hey',
        userId: '1234',
    },
    {
        id: '12345',
        text: 'Hello',
        userId: '12345',
    }
]



const resolvers: IResolvers = {
    Query: {
        users: () => {
            return Object.values(users);
        },
        user: (parent, { id }: any) => {
            return users.find(user => user.id === id);
        },
        me: (parent,args, { me }) => {
            return me;
        },
        messages: () => {
            return Object.values(messages)
        },
        message: (parent, { id } ) => {
            return messages.find((mess) => mess.id === id);
        }
    },

    Mutation: {
        createMessage: (parent, { text }, { me }) => {
            const id = uuidv4();
            const message = {
                id,
                text,
                userId: me.id
            }
            messages.push(message);

            return message;
        },
        createUser: (parent, { user }) => {
            const id = uuidv4();
            users.push({...user, id});
            return true;
        }
    },

    User: {
        username: (user: user) => {
            if (user.username === "What Ko") {
                return "Yes Ko"
            }
            return user.username;
        },
    },

    Message: {
        user: message => {
            return users.find(user => user.id === message.userId);
        }
    },
}


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        me: users[0]
    }
})

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server is running on http://localhost:8000/graphql')    
})

interface user {
    id: string;
    email: string;
    username: string;
}

interface message {
    id: string;
    text: string;
    userId: string;
}