import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Loader from './Loader';

const Books = () => {
    const navigration = useNavigation()
    if(navigration.state === 'loading'){
        return <Loader></Loader>
    }
    const { books } = useLoaderData()
 
    
    return (
        <div className='my-container'>
            <div className='grid gap-6 lg:grid-cols-4 sm:grid-cols-2'>
                {
                    books.map(book => <Book 
                        key={book.isbn13}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;