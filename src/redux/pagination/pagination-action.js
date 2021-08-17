import { createAction } from '@reduxjs/toolkit';

const setCurrentPage = createAction('pagination/setCurrentPage');
const setPortionNumber = createAction('pagination/setPortionNumber');

export { setCurrentPage, setPortionNumber };