//========================
// Puerto
//=========================

process.env.PORT = process.env.PORT || 3000;


//========================
// Entorno
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
// CADUCIDAD DEL TOKEN
//=========================
process.env.CADUCIDAD_TOKEN = (60 * 60 * 24 * 30);


//================================
// SEED DEL TOKEN DE AUTENTICACION
//================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

//========================
// Base de Datos
//=========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;