const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// configurando o servidor

const app = express();

app.use(morgan('dev')); // log de execução
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json()); // determinando o tipo de dados recebidos, em json
app.use(cors());

app.listen(3002, () => {

    console.log('Servidor rodando');
});