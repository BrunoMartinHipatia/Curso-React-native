

const { error } = require('console')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const logger = require('morgan')
const cors = require('cors')
const passport = require('passport')
const users = require('./routes/userRoutes')
const userRoutes = require('./routes/userRoutes')
const multer = require('multer')


const port = process.env.PORT ||3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

const session = require('express-session');

// Configura express-session
app.use(session({
    secret: 'mi_clave_secreta', // Cámbiala por una clave segura
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Usa `true` si estás en producción con HTTPS
}));

// Luego inicializas Passport
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port)

const upload = multer ({
    storage: multer.memoryStorage()
})

userRoutes(app, upload)

server.listen(3000,'192.168.1.43'|| 'localhost', function(){
    console.log('Aplicación de nodeJS '+ port+ ' Inicidada...')
});

app.get('/', (req, res) =>{
    res.send('Ruta raiz del backend')
}); 

app.get('/test', (req, res) =>{
    res.send('Esta es la ruta TEST')
});


//ERROR HANDLER

app.use((err, req ,res ,next )=>{
console.log(err);
res.status(err.status|| 500).send(err.stack);
});