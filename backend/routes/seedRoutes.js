import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
  console.log('Datos de prueba cargados correctamente en la BD');
});
export default seedRouter;
