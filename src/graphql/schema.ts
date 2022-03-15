import { buildSchema } from 'graphql';

export default buildSchema(`

    type TodoItem {
        _id: ID!
        title: String
        content: String
        createdAt: String
        updatedAt: String
    }

    type TodoList {
        items: [TodoItem]!

    }

    input AddItemData {
        title: String!
        content: String
    }

    input UpdateItemData {
        title: String
        content: String
    }

    type RootQuery {
        getAll: TodoList!
    }

    type RootMutation {
        addItem(itemData: AddItemData ): TodoItem!
        deleteItem(id: ID!): Boolean
        updateItem(id: ID!, itemData: UpdateItemData): TodoItem! 
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
