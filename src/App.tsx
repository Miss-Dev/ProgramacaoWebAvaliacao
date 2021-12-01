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
    
    console.log(imprimir())
    console.log('*****************posts**********************');
    let userId = [];
    //user ids
    userId = posts.map((obje: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        return Object.values(obje)[0];
    })
    
//    posts.filter(p => Object.values(p)[0]);
    console.log(userId);
   

    return (
        
        <>
    
        <div>Comece aqui!</div>
        <button onClick={adiciona}>
            Pegar postagens
        </button>

        <select>
        {
           <option value={userId.values}></option> 
        }
        </select>     

        
    
        </>
       
    );
    
   
}

export default App;

