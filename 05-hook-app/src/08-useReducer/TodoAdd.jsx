import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    if ( description.length <= 1 ) return;
    
    const NewTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    onNewTodo(NewTodo);
    onResetForm();
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}