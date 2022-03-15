import { Schema, model } from 'mongoose'
import { TodoItem } from '../types/index'



const todoItemSchema = new Schema<TodoItem>({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    }


}, {timestamps: true})


export default model<TodoItem>('TodoList', todoItemSchema);