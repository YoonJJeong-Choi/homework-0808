import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1>WELCOME</h1>
      <Link to={'/book/insert'}>도서 등록</Link>
      <br />
      <Link to={'/book/list'}>도서 목록</Link>
    </>
  );
};

export default Header;
