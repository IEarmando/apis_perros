const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.use('/imgperros', express.static('imgperros'));

app.get('/perro/:idperro', (request, response)=>{
    const serverUrl = request.protocol + '://' + request.get('host');
    let idperro = request.params.idperro;
    let perro = {};

    switch (idperro){
        case '1':
            perro = {
                perroid: idperro,
                nombre: 'cachorro',
                imgUrl: serverUrl + '/imgperros/cachorro.png'
                };
                break;

        case '2':
            perro = {
                perroid: idperro,
                nombre: 'pug',
                imgUrl: serverUrl + '/imgperros/pug.png'
                };
                break;

        case '3':
            perro = {
                perroid: idperro,
                nombre: 'chihuahua',
                imgUrl: serverUrl + '/imgperros/chihuahua.png'
                };
                break;

        case '4':
            perro = {
                perroid: idperro,
                nombre: 'husky',
                imgUrl: serverUrl + '/imgperros/husky.png'
                };
                break;

        default: 
            perro = {
                perroid: idperro,
                nombre: 'no encontrada',
                imgUrl: serverUrl + '/imgperros/imagex.png'
                };

    }
    response.send(perro);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchado en el puerto http://localhost:${PORT}` + `/imgperros`);
});
