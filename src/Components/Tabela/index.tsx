import React from 'react';
import {Tabela} from './styles';
export default function Container(props: any) {
    return (
        <Tabela>
        <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Titulo</th>
                <th>Texto</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.userid}</td>
                <td>{props.titulo}</td>
                <td>{props.body}</td>                
            </tr>
           
        </tbody>
        </table>
    </Tabela>
    )
}