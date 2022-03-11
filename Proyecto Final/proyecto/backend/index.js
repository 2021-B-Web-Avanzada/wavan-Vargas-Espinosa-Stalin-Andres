const express = require('express');
const app = express();
const cors = require('cors');
const { mongoose } = require('./database');

// Settings
app.set('port', 8080);

// Middlewares
app.use(express.json());    // Parse JSON
app.use(cors({origin: 'http://localhost:4200'}));

/* Routes */
// Store
const categoriaRoute = require('./routes/categoria.routes');
app.use('/categoria', categoriaRoute);
// Product
const platoRoute = require('./routes/plato.routes');
app.use('/categoria', platoRoute);

const comprobanteRoute = require('./routes/comprobante.routes');
app.use('/cliente', comprobanteRoute);
const clienteRoute = require('./routes/cliente.routes')
app.use('/cliente', clienteRoute);


// Start the server
app.listen(app.get('port'), () => {
  console.log('Server listening on port', app.get('port'));
});
