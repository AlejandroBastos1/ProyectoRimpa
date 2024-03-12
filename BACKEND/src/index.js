import app from './app.js'
import { connectDB } from './db.js';

const puerto = 4041;

connectDB();
app.listen( puerto ,() => {
console.log(`El servidor esta escuchando en el puerto ${puerto}`)
});