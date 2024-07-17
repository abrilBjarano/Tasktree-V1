import { useState } from "react";

export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();
      if( inputValue.trim().length < 0 ) return;

      const newValue = inputValue.trim();
      console.log( newValue );
      setInputValue('');
   };


   return {
      inputValue,
      onInputChange,
      onSubmit
   }
}
