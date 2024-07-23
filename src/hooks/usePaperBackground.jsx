export const usePaperBackground = ( img ) => {

   const listContainerStyle = {
      backgroundImage: `url(${ img })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center calc(0% - 50px)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '96px',
      paddingRight: '82px',
      position: 'relative',
   };

   const totalTasksStyle = {
      position: 'absolute',
      top: 0, 
      left: '145px',
      backgroundColor: 'transparent', 
      paddingTop: '50px', 
   };

   const containerStyle = {
      width: '67%', 
   };

   const itemStyle = {
      backgroundColor: 'transparent',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      width: '130%', // Ancho del elemento li
      margin: '0 auto',
      display: 'flex', // Haciendo el li un contenedor flex
      alignItems: 'center', // Alineación vertical de los elementos hijos
      justifyContent: 'space-between', // Espacio entre los elementos dentro del li
      padding: '10px', // Espacio alrededor de los elementos
   };
   
   
   return {
      listContainerStyle,
      totalTasksStyle,
      containerStyle,
      itemStyle
   }
}
