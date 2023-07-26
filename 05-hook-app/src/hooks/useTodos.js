import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse( localStorage.getItem('Todos') ) || [];
}

export const useTodos = (initialState) => {
  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify( todos ));
  }, [todos]);

  const handleNewTodo = ( todo ) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    });
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  return {
    todos,
    pendingTodosCount: todos.filter(({ done }) => !done).length,
    todosCount: todos.length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}