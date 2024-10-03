// const express = require('express');

// const app = express();
// const port = 2006

// app.use(express.static('./public'))



// app.get('/LogIn', (req, res) => {
//     res.sendFile(__dirname + '/LogIn/login.html')
// })
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(2006, () => {
  console.log('Servidor en funcionamiento en http://localhost:2006');
});

// app.listen(port, () => {
//     console.log(`Servidor corriendo en el puerto ${port}`)
// })