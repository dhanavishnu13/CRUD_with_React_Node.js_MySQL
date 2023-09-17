import React from 'react'
import {useEffect, useState, Link} from 'react'
import axios from 'axios'

const Books=()=> {
  const [books, setBooks]= useState([]);

  useEffect(()=>{
    const fetchAllBooks= async ()=>{
        try{
          const res=await axios.get("http://localhost:8800/book");
          // console.log(res)
          setBooks(res.data);
        }catch(err){
          console.log(err);
        }
    }
    fetchAllBooks()
  },[]);

  return (
    <div>
      <h1>My Books</h1>
      <div className='books'>
        {books.map(book=>(
          <div className="book" key={book.id}>
            {book.cover && <img src="" alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
             <span>{book.price}</span>
          </div>
        ))}

        {/* <button>
        <Link to="/add" >
        Add new book
        </Link>
      </button> */}
      </div>
      
    </div>
  );
}

export default Books