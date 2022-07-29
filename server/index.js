// server/index.js
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

//Funcion que invierte la cadena
function invertirCadena(texto) {
	return texto.split('').reverse().join('');
}

app.get('/iecho/', (req, res) => {
	const { text } = req.query;
	if (parseInt(text)) {
		res.status(400).send({ error: 'no text' });
	} else {
		let resultado = invertirCadena(text);
		res.status(200).send({ text: resultado });
	}
});

// Hace que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// // Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app Reacts
// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
