const Planet = require('../data')

module.exports = async(req,res) => {
  const Planets = await Planet.list();
  res.status(200).json(Planets)
}