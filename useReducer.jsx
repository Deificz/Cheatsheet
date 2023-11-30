import { useReducer } from "react"

const ACTIONS = {
   ADD_TODO: 'add-todo',
   TOGGLE_TODO: 'toggle-todo',
}


const reducer = (state, action) =>{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todo, newTODO(action.payload.task)]
        case ACTIONS.TOGGLE_TODO:
            return  state.map(todo => todo.id === action.payload.id ? {...todo, isDone: false} : todo)
    }
}


export default function Test () {

    const [state,dispatch] = useReducer(reducer,[]);
    const [task, setTask] = useState('');


    const newTODO = (task) =>{
        return {id: uuid(), task: task, isDone: false}
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch({type: ACTIONS.ADD_TODO, payload: {task: task}})
    }
    return (
        <>
        <button key={item.id} onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO,payload: {id : item.id} })}></button>
        </>
    )
}