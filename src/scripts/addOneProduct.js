import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
export const addOneProduct = async () => {
  const data = [];
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const product = createFakeProduct();
    const parsedProduct = JSON.parse(products);

    data.push(product, ...parsedProduct);
    console.log(data);
    await fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2), 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

addOneProduct();
