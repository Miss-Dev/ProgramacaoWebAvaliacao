import React, { useState } from 'react';
import API from './api'




function App() { 
    const [posts, setPosts] = useState([]);

    
    //imprimindo response(inteiro) no console 
    function imprimir(){
        API.get('/posts')
            .then(resposta => console.log(resposta.data));
    }
    
    //funcao para operacao com a variavel de estado
    function adiciona(){  
        API.get('/posts')
        .then(resposta => setPosts(resposta.data));
    }

    console.log('*****************posts**********************')
    
    console.log(posts)
    

    return (
        <>
    
        <div>Comece aqui!</div>
        <button onClick={adiciona}>
            Pegar postagens
        </button>

        
    
        </>
       
    );
    
   
}

export default App;

