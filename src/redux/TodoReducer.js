const initialState = {
    loading:false,
    data:null,
    error:null
}

export const TodoReducer = ( state= initialState, action)=>{
    switch(action.type){    
        case 'GET_ALL_TODO_PENDING':
            return {...state, loading:true}
        case 'GET_ALL_TODO_FULFILL':
            return {
                ...state,
                data:action.payload,
            }
        case 'GET_ALL_TODO_ERROR':
            return {...state, error:action.payload}
        case 'ADD_TODO_PENDING':
            return {...state , loading:true}
        case 'ADD_TODO_FULFILL':
            return{
                ...state,
                data: Array.isArray(state.data) ? [...state.data, action.payload] : [action.payload],
                loading:false
            }
        case 'ADD_TODO_ERROR':
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}