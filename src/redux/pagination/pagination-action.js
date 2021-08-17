import { createAction } from '@reduxjs/toolkit';

const setCurrentPage = createAction('pagination/setCurrentPage');
const setTotalPageCount = createAction('pagination/setTotalPageCount');
const setPortionNumber = createAction('pagination/setPortionNumber');

export { setCurrentPage, setTotalPageCount, setPortionNumber };