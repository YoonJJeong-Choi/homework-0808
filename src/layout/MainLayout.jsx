import React from 'react';
import Header from '../components/common/Header';
import Aside from '../components/common/Aside';
import Footer from '../components/common/Footer';
import { Routes, Route } from 'react-router-dom';
import BookInsert from '../components/book/BookInsert';
import BookList from '../components/book/BookList';

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Aside />
        <Routes>
          <Route path='/board/insert' element={<BookInsert />} />
          <Route path='/board/list' element={<BookList />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
