// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Quiz',
    {
      pregunta: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {msg: "-> Falta Pregunta"}
        }
      },
      respuesta: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {msg: "-> Falta Respuesta"}
        }
      },
      tema: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {msg: "-> Falta Tema"}
        },
        isIn: {
          args: [
            ['ocio', 'tecnologia', 'humanidades', 'otro', 'ciencia']
          ],
          msg: "Seleccione un tema."
        }
      }
    }
  );
}
