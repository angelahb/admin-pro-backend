const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        require: true
    },
});

//Cambia la forma de visualizar el id en postman de _id a uid
MedicoSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();

    return object
}, { collection: 'medicos' });

module.exports = model('Medico', MedicoSchema);