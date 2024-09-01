import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">I&apos;m Lerato, a passionate software engineer.</p>
        <p>Explore my projects, learn about my journey, and feel free to reach out!</p>
      </div>
    </Layout>
  );
};

export default HomePage;