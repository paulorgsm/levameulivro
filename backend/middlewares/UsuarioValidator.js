const yup = require('yup')

module.exports = {
  step2: (req, res, next) => {
    let schema = yup.object().shape({
      sobrenome: yup.string().required(),
      cpf: yup.string().required().min(11).max(11),
      celular: yup.string().required().min(10).max(11),
      data_nasc: yup.string().required().min(10).max(10),
      sexo: yup.string().required()
    });
    
    if (!schema.isValidSync(req.body)) {
      return res.status(400).json({ error: 'Invalid data' });
    }
    
    next();
  },
  update: (req, res, next) => {
    let schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().required(),
      sobrenome: yup.string().required(),
      cpf: yup.string().required().min(11).max(11),
      celular: yup.string().required().min(10).max(11),
      data_nasc: yup.string().required().min(10).max(10),
      sexo: yup.string().required(),
      foto_usuario: yup.string(),
      senha: yup.string().required()
    });
    
    if (!schema.isValidSync(req.body)) {
      return res.status(400).json({ error: 'Invalid data' });
    }
    
    next();
  }
}