import React, { Component, useState } from 'react';

import API from './api';
import './index.css';

import Tabela  from './Components/Tabela';


function App(){ 

    const [posts, setPosts] = useState([]);
   
    
    //imprimindo response(inteiro) no console 
    function imprimir(){
        API.get('/posts')
            .then(resposta => console.log(resposta.data));
    }
    
    //funcao para operacao com a variavel de estado e imprime os posts
    function adiciona(){  
        API.get('/posts')
        .then(resposta => setPosts(resposta.data));
        console.log(imprimir())
    }
    
    
   
    const arr = posts.map((e) => {
        return String(Object.values(e)[0]);
    })
    var userId = arr.filter((este, i) => arr.indexOf(este) === i);
    //user ids
    function pegaUserId(){
      
        let userIds: { label: string; value: string; }[]= []
          //transforma em value e labels
        userId.forEach(function(element) {
            userIds.push({ label:element, value: element })
        });
        return userIds;
    }

  
    
    const [selectedOption, setSelectedOption] = useState(userId[0]);
    let a = 0;
   
//    posts.filter(p => Object.values(p)[0]);
 
    
    return (
    <>
        <div>Comece aqui!</div>
        <div>
            Clique aqui para pegar as postagens: 
            <button onClick={adiciona}>
                Pegar postagens
            </button>
            
        </div>
        <br/>
        {/* mostrando userIds */}
        <label>Selecione um userId para ver a postagem: </label>
        <select onChange={e => setSelectedOption(e.target.value)}>
            <option value="0">Selecione</option>
        {pegaUserId().map(item => {
                a = 0
                return (                      
                                   
                    <option key={item.label || "Aqui"} value={item.value}>{item.value}</option>                          
                    
                )
                
                
            
        })      
              
        }        
      
        </select>
          {/* mostrando de acordo com userId selecionado*/}
        <p></p>
        {       
        posts.map((e) => {
            if (String(Object.values(e)[0]) === selectedOption && a === 0){
                //condição de parada para não pegar mais de uma postagem por userId
                a = 1
                return(
                    <><h2>Título: {String(Object.values(e)[2])}<br/></h2><p> Texto: {String(Object.values(e)[3])}</p><br/><Tabela userid={String(Object.values(e)[0])} titulo={String(Object.values(e)[2])} body= {String(Object.values(e)[3])}/></>
                );
                
            }
        })       
        
        }

         
       
        
    
    </>
       
    );
    
   
}

export default App;



