import React from 'react';
import API from './api'



function App() { 
   
    //imprimindo response(inteiro) no console    
    API.get('/posts')
    .then(resposta => console.log(resposta))  
 


    return (
    
        <div>Comece aqui!</div>
        
       
    );
   
}

export default App;
