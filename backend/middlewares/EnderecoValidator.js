const yup = require('yup')

module.exports = (req, res, next) => {
  let schema = yup.object().shape({
    bairro: yup.string().required(),
    cep: yup.string().required().min(8).max(8),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    logradouro: yup.string().required(),
    numero: yup.string().required()
  });
    
  if (!schema.isValidSync(req.body)) {
    return res.status(400).json({ error: 'Invalid data' });
  }
    
  next(); 
}