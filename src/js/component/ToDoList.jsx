import React from "react";
import { useState } from "react";
//import { useEffect } from "react";


const ToDoList = () => {

    const [tarea, setTarea] = useState('');
	const [lista, setLista] = useState([]);
    const [esOculto, setEsOculto] = useState('hidden');

    const funcionEliminar = indiceElemento =>{
        const newArr = [...lista]
        newArr.splice(indiceElemento,1)
        setLista(newArr)
    }

return (
    <div className="container border w-25 shadow mt-4 border">
        <input className="todo-input border-0 border-bottom w-100" onChange={e => setTarea(e.target.value)} 
				value={tarea}  placeholder="Añadir tarea" type='text'onKeyUp={event => event.keyCode === 13 ? lista.push(tarea) && setTarea("") : setLista}/>
       <div className="w-100">
				<ul className="list-group">
					{lista.length == 0 ? "" : lista.map((t,index) => (<li key={index} className="list-group-item d-flex justify-content-between border-bottom" style={{backgroundColor: '#f8f9fa', border:"none"}} onMouseEnter={() => setEsOculto(index)}
								onMouseLeave={() => setEsOculto("hidden")}> {t}<span className="hidden" onClick={()=> funcionEliminar(index) }><i className="fa fa-trash" style={{color: '#ad4872', visibility: esOculto == index ? "" : "hidden"}}></i></span></li>))}
				</ul>
			</div>
			<div className="text-muted fw-lighter ms-2 pr-1">{lista.length} Tareas por completar</div>
        
    </div>
    
);
};



export default ToDoList;


