
import { Property } from '../components/PropertyCard';

const properties: Property[] = [
  {
    id: "prop1",
    title: "Modern Apartment with Ocean View",
    price: 450000,
    currency: "USD",
    location: "Miami, Florida",
    country: "USA",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  },
  {
    id: "prop2",
    title: "Luxury Villa with Private Pool",
    price: 1200000,
    currency: "USD",
    location: "Beverly Hills, California",
    country: "USA",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  },
  {
    id: "prop3",
    title: "Downtown Studio Apartment",
    price: 1800,
    currency: "USD",
    location: "New York, NY",
    country: "USA",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: false,
    isForRent: true
  },
  {
    id: "prop4",
    title: "Rural Cottage with Large Garden",
    price: 320000,
    currency: "GBP",
    location: "Cotswolds",
    country: "UK",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  },
  {
    id: "prop5",
    title: "Urban Penthouse Apartment",
    price: 3500,
    currency: "EUR",
    location: "Berlin",
    country: "Germany",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    areaUnit: "sq m",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: false,
    isForRent: true
  },
  {
    id: "prop6",
    title: "Beach Front Luxury Condo",
    price: 890000,
    currency: "USD",
    location: "Malibu, California",
    country: "USA",
    type: "Condo",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  },
  {
    id: "prop7",
    title: "Modern Office Building",
    price: 2500000,
    currency: "USD",
    location: "Chicago, IL",
    country: "USA",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 4,
    area: 5000,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  },
  {
    id: "prop8",
    title: "Family Home with Garden",
    price: 750000,
    currency: "USD",
    location: "Portland, Oregon",
    country: "USA",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    areaUnit: "sq ft",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60"
    ],
    isForSale: true,
    isForRent: false
  }
];

export default properties;
