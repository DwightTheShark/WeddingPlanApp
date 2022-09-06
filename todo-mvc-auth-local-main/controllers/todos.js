const Todo = require('../models/Todo')
// * nshoemake
// ! Added access to Users Schema
const Users = require('../models/User')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
            try{
                await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id, dateDue: req.body.dateDue, category: req.body.category})
                console.log('Todo has been added!')
                res.redirect('/todos')
            }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    // * nshoemake
    // ! Added shareTodo method
    // TODO Think of other edge cases that may break app
    shareTodo: async (req, res)=>{
        try {
            // ! This will search the user collection, find and store the document of the user
            const userName = await Users.findOne({userName: req.body.shareWithUserId})
            // ! If no username is found, it will render a 404
            if (!userName) {
                return res.render('error/404')
            }
            const userId = userName._id.toString()
            // ! This will search the todos collection, find and store the document of the todo to be shared
            const todo = await Todo.findById(req.body.todoId)
            // ! This will check to see if the document already has been shared with the user, and if not, pushes it to the array
            if (todo.userId.every((el) => el !== userId)) {
                await Todo.findOneAndUpdate({_id:req.body.todoId},{
                    $push: {
                        userId: userId
                    }
                })
            } else {
                console.log('Todo already shared')
            }
            console.log('Shared todo')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
}    