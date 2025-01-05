import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';


const Branches = () => {
  const data = [
    {
      "title": "Introduction to Algorithms",
      "description": "Covers fundamental algorithms and data structures used in computer science, with a focus on problem-solving and computational efficiency.",
      "useCase": "Optimizing code performance and understanding algorithm design.",
      "img": "https://covers.openlibrary.org/b/id/8114155-L.jpg"
    },
    {
      "title": "Clean Code",
      "description": "Focuses on writing clean, maintainable, and efficient code, emphasizing best practices for software craftsmanship.",
      "useCase": "Improving code readability and maintainability.",
      "img": "https://covers.openlibrary.org/b/id/9648391-L.jpg"
    },
    {
      "title": "Artificial Intelligence",
      "description": "Comprehensive guide to AI, exploring concepts like machine learning, natural language processing, and robotics.",
      "useCase": "Building intelligent systems and implementing AI algorithms.",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591308334i/53828219.jpg"
    },
    {
      "title": "The Pragmatic Programmer",
      "description": "A guide for software developers to master their craft, focusing on practical techniques and mindset.",
      "useCase": "Enhancing programming skills and improving workflows.",
      "img": "https://covers.openlibrary.org/b/id/10712965-L.jpg"
    },
    {
      "title": "The Art of Computer Programming",
      "description": "An extensive exploration of computer programming theory and practice, written by Donald Knuth.",
      "useCase": "Learning advanced programming techniques and computational theory.",
      "img": "https://covers.openlibrary.org/b/id/6804021-L.jpg"
    },
    {
      "title": "Operating System Concepts",
      "description": "Explains core concepts of operating systems, such as process management, memory management, and file systems.",
      "useCase": "Understanding OS architecture and systems programming.",
      "img": "https://covers.openlibrary.org/b/id/8369253-L.jpg"
    },
    {
      "title": "Design Patterns",
      "description": "Covers reusable solutions to common software design problems, focusing on object-oriented programming.",
      "useCase": "Improving software design and applying reusable patterns.",
      "img": "https://covers.openlibrary.org/b/id/9245895-L.jpg"
    },
    {
      "title": "Structure and Interpretation of Computer Programs",
      "description": "Explores fundamental principles of programming languages and software design using Scheme.",
      "useCase": "Understanding programming fundamentals and abstraction.",
      "img": "https://m.media-amazon.com/images/I/71BBXQnykuL.jpg"
    }
  ];
  

  return (
    <div className='min-h-screen p-2 md:p-4 container grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-indigo-300'>
      {data.map((book, index) => (
        <Card key={index} className='shadow-xl flex flex-col justify-center items-center bg-black cursor-pointer'>
        <CardHeader>
          <CardTitle className='text-white text-lg md:text-xl'>{book.title}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-center'>
          <img src={book.img} alt="profile" className='w-1/2 rounded-xl' />
          <p className='text-sm md:text-lg text-slate-300 mb-4'>{book.description}</p>
          <Button><a href="#">Know More</a></Button>
        </CardContent>
        
      </Card>
      
      ))}
    </div>
  );
};

export default Branches;
