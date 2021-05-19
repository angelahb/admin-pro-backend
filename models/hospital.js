const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    usuario: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
}, { collection: 'hospitales '});

//Cambia la forma de visualizar el id en postman de _id a uid
HospitalSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();

    return object
});

module.exports = model('Hospital', HospitalSchema);