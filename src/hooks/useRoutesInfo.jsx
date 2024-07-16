export const useRoutesInfo = () => {

   const routes = [
      { name: 'Home', path: '/'},
      { name: 'Completed', path: '/completed'},
   ]

   const [ homeRoute, completedRoute ] = routes;

   return {
      routes,
      homeRoute,
      completedRoute,
   }
}
