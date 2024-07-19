import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');
   const { addTask } = useContext( TaskContext );

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();
      if( inputValue.trim().length < 0 ) return;

      const newValue = {
         id: new Date().getTime() * 2,
         description: inputValue.trim(),
         done: false
      }

      addTask( newValue );

      setInputValue('');
   };


   return {
      inputValue,
      onInputChange,
      onSubmit
   }
}
