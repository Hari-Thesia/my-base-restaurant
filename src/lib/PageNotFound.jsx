import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4 text-muted-foreground">The page you are looking for does not exist.</p>
      <Link to="/" className="text-primary underline">Return to Home</Link>
    </div>
  );
}