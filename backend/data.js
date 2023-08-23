import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Juanma',
      email: 'admin@geeks.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Geeks',
      email: 'user@geeks.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Camiseta Nike Slim',
      slug: 'nike-slim-shirt',
      category: 'Camisetas',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'Camiseta de gran calidad para hacer deporte',
    },
    {
      //_id: '2',
      name: 'Camiseta Adidas Slim',
      slug: 'adidas-slim-shirt',
      category: 'Camisetas',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'Camiseta de gran calidad para hacer deporte',
    },
    {
      //_id: '3',
      name: 'Pantalón Nike Fit',
      slug: 'nike-fit-pant',
      category: 'Pantalones',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'Pantalón de gran calidad para hacer deporte',
    },
    {
      //_id: '4',
      name: 'Pantalón Adidas fit',
      slug: 'adidas-fit-pant',
      category: 'Pantalones',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'Pantalón de gran calidad para hacer deporte',
    },
  ],
};

export default data;
