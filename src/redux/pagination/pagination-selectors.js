import { createSelector } from '@reduxjs/toolkit';

const getCurrentPage = (state) => state.pagination.currentPage;
const getTotalPageCount = (state) => state.pagination.totalPageCount;

const getPagesCount = createSelector([getTotalPageCount], (totalPageCount) => {
  const pagesCount = Math.ceil(totalPageCount / 20);
  return pagesCount < 50 ? pagesCount : 50;
});

export { getCurrentPage, getPagesCount };