import { useState } from 'react';
//import './style.css';

function App() {
	const [texto, setTexto] = useState(''); //Permite la captura del texto que se enviará al back
	const [first, setFirst] = useState(''); //Primer estado guardado
	const [second, setSecond] = useState(''); //Segundo estado guardado
	const [third, setThird] = useState(''); //Tercer estado guardado
	const [contador, setContador] = useState(0); //Lleva el contador del clic

	//Función para controlar el clic del botón y realizar acciones debido a este
	function onSubmit(e) {
		e.preventDefault();
		setContador(contador + 1); // Permite conocer el número del clic, para posicionar el texto
		mostrarPalabra(contador); // Llama a nuestra función que coloca los textos en los campos
	}
	//Función que controla el cambió de un input
	function onInputChange(e) {
		setTexto(e.target.value); // Funcion para capturar el value del cambio de estado del input
	}
	//Función que muestra la palabra que se va enviando al backend en el input indicado
	//También puede haberse hecho con un switch
	function mostrarPalabra(number) {
		if (number === 0) {
			fetch('https://cwriter.herokuapp.com/iecho?text=' + texto)
				.then((response) => response.json())
				.then((json) => setFirst(json.text));
		} else if (number === 1) {
			fetch('https://cwriter.herokuapp.com/iecho?text=' + texto)
				.then((response) => response.json())
				.then((json) => setSecond(json.text));
		} else if (number === 2) {
			fetch('https://cwriter.herokuapp.com/iecho?text=' + texto)
				.then((response) => response.json())
				.then((json) => setThird(json.text));
		} else if (number === 3) {
			fetch('https://cwriter.herokuapp.com/iecho?text=' + texto)
				.then((response) => response.json())
				.then((json) => setFirst(json.text));
			setContador(1);
		}
	}

	return (
		<div class="container-fluid text-center ">
			<div class="p-3 mb-2 bg-danger text-white">
				<div class="row">
					<div class="col-3"></div>
					<div class="col-8">
						<form onSubmit={onSubmit}>
							<div class="row g-2">
								<div class="col">
									<input
										class="form-control"
										type="text"
										onChange={onInputChange}
										value={texto}
										placeholder="Insert Text"
									></input>
								</div>
								<div class="col">
									<input
										type="submit"
										value="Send"
										class="btn btn-primary float-left"
									></input>
								</div>
							</div>
						</form>
					</div>
					<div class="col-1"></div>
				</div>
			</div>
			<br />
			<div class="container text-center bg-light">
				<div class="text-left">
					<br />
					<h5>Results:</h5>
					<br />
				</div>
				<div class="m-0 row justify-content-center">
					<div class="row col-md-7">
						<div class="col">
							<div class="mb-3 col-sm-10">
								<input
									class="form-control"
									type="text"
									placeholder="Third Text"
									value={third}
								></input>
							</div>
							<div class="mb-3 col-sm-10">
								<input
									class="form-control"
									type="text"
									placeholder="Second Text"
									value={second}
								></input>
							</div>
							<div class="mb-3 col-sm-10">
								<input
									class="form-control"
									type="text"
									placeholder="First Text"
									value={first}
								></input>
							</div>
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
