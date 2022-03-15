import TodoItem from '../models/todoItem'
import validator from 'validator'

import { TodoItem as TodoItemType } from '../types'
import { HydratedDocument } from 'mongoose'



type ItemData = {
    itemData: {
        title: string
        content: string
    },
    id: string | number
}




export default {
    getAll: async () => {
        const items = await TodoItem.find()
        return {items: items.map(el => {
            return {...el._doc, _id: el._id.toString(), createdAt: el.createdAt.toISOString(), updatedAt: el.updatedAt.toISOString()}
        })}
    },
    addItem: async ({itemData}: ItemData) => {
        try {
            // validation
            const errors = []
            if(!validator.isLength(itemData.title, {min: 5})) {
                errors.push({message: 'title is too short!'})
            }
            if(!validator.isNumeric(itemData.title)) {
                errors.push({message: 'title should not contain only numbers!'})
            }
            if(errors.length > 0) {
                const customError = `
                    ${errors.map(err => err.message + '\n')}
                `
                throw new Error(customError)
            }
            
            // create new item
            const item: HydratedDocument<TodoItemType> = new TodoItem({
                title: itemData.title,
                content: itemData.content
            });

            // save item
            const savedItem = await item.save()
    
            return {...savedItem._doc, _id: savedItem._id.toString(), createdAt: savedItem.createdAt.toISOString(), updatedAt: savedItem.updatedAt.toISOString()}
    
        } catch(err) {
            throw err
        } 
    },
    deleteItem: async ({id}: ItemData) => {
       try {
            const targetItem = await TodoItem.findById(id);
            if(!targetItem) throw new Error('item does not exist!')
            await TodoItem.findByIdAndRemove(id);
            return true
       }catch(err) {
            throw err
       }
    },
    updateItem: async ({id, itemData}: ItemData) => {
        const targetItem = await TodoItem.findById(id);
        if(!targetItem) throw new Error('element does not exist!')
        
        targetItem.content = itemData.content || targetItem.content;
        targetItem.title = itemData.title || targetItem.title;

        const savedItem = await targetItem.save()
        return {...savedItem._doc, _id: savedItem._id.toString(), createdAt: savedItem.createdAt.toISOString(), updatedAt: savedItem.updatedAt.toISOString()}
    }
}
