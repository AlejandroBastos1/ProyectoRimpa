import { Schema, SchemaTypes, Types, model } from "mongoose";

const operacionSchema = new mongoose.Schema ({
    
    ciudadSalida : {
        type :  SchemaTypes.ObjectId,
        required : true,
        trim : true
    },

    ciudadEntrada : {
        type :  SchemaTypes.ObjectId,
        required : true,
        trim : true
    },

    nombrePiloto : {
        type :  SchemaTypes.ObjectId,
        required : true,
        trim : true,
        unique : true
    },

    horaSalida : {
        type : Number,
        required : true,
        trim : true,
        maxLength : 4
    },

    matriucla : {
        type : SchemaTypes.Types.ObjectId,
        required : true,
        unique : true
    },

    tipoAvion: {
        type : mongoose.Types.ObjectId,
        required : true
    },

    capacidadCarga : {
        type : mongoose.Types.ObjectId,
        required : true
    },

    pilotoActivo : {
        type : mongoose.Types.ObjectId,
        required : true
    },

    libretaMPiloto : {
        type : mongoose.Types.ObjectId,
        required : true,
        unique : true,
        maxLength : 10
    },

    copilotoActivo : {
        type : SchemaTypes.ObjectId,
        required : true,
    },

    libretaCopiloto : {
        type : SchemaTypes.ObjectId,
        required : true,
        unique : true,
        maxLength : 10
    },

    tripulacion : {
        type : [{
            type : SchemaTypes.ObjectId,
            ref: 'Platoon',
            unique: true,
            required: true
        }],
        unique : true,
        required : true,
    },

    materiales : {
        type : [{
            type : SchemaTypes.ObjectId,
            ref : 'Material',
            unique: true,
            required : true
        }],
        unique : true,
        required : true
    }

});


export default mongoose.model('Operation', operacionSchema);

