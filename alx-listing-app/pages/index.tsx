import type { NextPage } from 'next';
import Card from '../components/common/card';
import Button from '../components/common/button';

const Home: NextPage = () => {
  const properties = [
    { title: 'Cozy Apartment', description: 'A comfortable apartment in the city center.' },
    { title: 'Modern House', description: 'Spacious house with a beautiful garden.' },
    { title: 'Beachside Villa', description: 'Luxury villa with sea view.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <Card key={index} title={property.title} description={property.description} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button label="View All Listings" onClick={() => alert('Redirecting to listings...')} />
      </div>
    </div>
  );
};

export default Home;
