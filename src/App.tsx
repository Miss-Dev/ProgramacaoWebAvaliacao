import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import API from './api'


async function getRep(){
    const resp = await API.get('/posts');
    return resp.data
}

function App() { 
    const [posts, setPosts] = useState({});
    
    //imprimindo response(inteiro) no console    
    // API.get('/posts')
    // .then(resposta => console.log(resposta.data));
    
    console.log('*****************posts**********************')
    
    console.log(posts)
    return (
        <>
    
        <div>Comece aqui!</div>
        <button onClick={() => setPosts({posts: getRep()})}>
            Pegar postagens
        </button>
    
        </>
       
    );
    
   
}

export default App;

