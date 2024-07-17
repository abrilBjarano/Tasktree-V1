import { useForm } from "../hooks/useForm";

export const TaskAdd = () => {

   const { inputValue, onInputChange, onSubmit } = useForm();

   return (
      <form onSubmit={ onSubmit }>
         <input
            type="text" 
            placeholder="What needs to be done? ✏️" 
            className="form-control mb-4"
            value={ inputValue } 
            onChange={ onInputChange } />
            
      </form>
   )
}
