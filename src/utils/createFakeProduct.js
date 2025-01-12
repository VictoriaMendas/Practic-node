import { faker } from '@faker-js/faker';

export const createFakeProduct = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.department(),
  description: faker.commerce.productDescription(),
});
