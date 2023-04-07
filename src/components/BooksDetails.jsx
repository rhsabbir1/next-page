import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BooksDetails = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>Books Details </h1>
        </div>
    );
};

export default BooksDetails;