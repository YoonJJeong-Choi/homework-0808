import React from 'react';

const BookInsert = () => {
  return (
    <>
      <form>
        <input type='text' name='title' placeholder='title' />
        <br />
        <input type='text' name='price' placeholder='price' />
        <br />
        <input type='submit' value={'등록하기'} />
      </form>
    </>
  );
};

export default BookInsert;
