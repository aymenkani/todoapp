import TodoItem from '../models/todoItem'

import { TodoItem as TodoItemType } from '../types'
import { HydratedDocument } from 'mongoose'



type ItemData = {
    itemData: {
        title: String
        content: String
    },
    id: String | Number
}




export default {
    
}
