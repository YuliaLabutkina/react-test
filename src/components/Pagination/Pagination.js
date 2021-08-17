import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentPage, getPagesCount } from '../../redux/pagination/pagination-selectors';
import { getSearchQuery } from '../../redux/searchQuery/searchQuery-selectors';
import { loading } from '../../redux/repo/repo-selectors';
import { getRepositories } from '../../redux/repo/repo-operations';
import * as paginationActions from '../../redux/pagination/pagination-action';

import { PaginationWrapper, PaginationPage, PrevButton, NextButton } from './Pagination.style';

const createPortionNumber = (portionNumber, pagesCount) => {
    return Array.from({ length: pagesCount > 10 ? 10 : pagesCount }, (v, k) => {
        if(portionNumber === 1) {
            return k + 1;
        }

        return (portionNumber - 1) * 10 + k + 1;
    })
};

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const pagesCount = useSelector(getPagesCount);
    const searchQuery = useSelector(getSearchQuery);
    const isLoading = useSelector(loading);
    const [portionNumber, setPortionNumber] = useState(1);
    const [pages, setPages] = useState([]);

    const portionCount = Math.ceil(pagesCount / 10);

    useEffect(() => {
        pagesCount && setPages(createPortionNumber(portionNumber, pagesCount));
    }, [portionNumber, pagesCount]);

    useEffect(() => {
        setPortionNumber(1);
        setPages([]);
    }, [searchQuery]);

    const onPageChanged = (page) => {
        if(page !== currentPage) {
            dispatch(getRepositories(searchQuery, page));
            dispatch(paginationActions.setCurrentPage(Number(page)));
        };
    };

    const incrementPage = () => setPortionNumber(portionNumber + 1);
    const decrementPage = () => setPortionNumber(portionNumber - 1);

    return (
        <PaginationWrapper isLoading={isLoading}>
            {portionNumber > 1 && <PrevButton onClick={decrementPage}>Previous</PrevButton>}
            {pages.length > 0 && pages.map(page => <PaginationPage key={page} onClick={() => onPageChanged(page)} isActive={currentPage === page}>{page}</PaginationPage>)}
            {portionCount > portionNumber && <NextButton onClick={incrementPage}>Next</NextButton>}
        </PaginationWrapper>
    );
};

export default Pagination; 