import React from "react";
import ToDoList from "./ToDoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid ">
			<div className="pt-5 text-center">
					<h1 className="fw-light display-1 opacity-25" style={{color:"#ad4872"}}>Tareas</h1>
				</div>
		<div className="">
			<ToDoList/>
		</div>
		</div>
	);
};

export default Home;
