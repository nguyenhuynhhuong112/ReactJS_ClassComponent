

export const TodoAction = {
    getAll:{
        pending: ()=>({type:'GET_ALL_TODO_PENDING'}),
        fulfill: (data)=>({type:'GET_ALL_TODO_FULFILL', payload:data}),
        error: (data)=>({type:'GET_ALL_TODO_ERROR', payload:data})
    },
    createTodo : {
        pending: ()=>({type:'ADD_TODO_PENDING'}),
        fulfill: (data)=>({type:'ADD_TODO_FULFILL', payload:data}),
        error: (data)=>({type:'ADD_TODO_ERROR', payload:data})
    }
}