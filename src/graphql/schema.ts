import { buildSchema } from "graphql";

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

    input ItemData {
        title: String
        content: String
    }

    type RootQuery {
        getAll: TodoList!
    }

    type RootMutation {
        addItem(itemData: ItemData ): TodoItem!
        deleteItem(id: ID!): Boolean
        updateItem(id: ID!, itemData: ItemData): TodoItem! 
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

