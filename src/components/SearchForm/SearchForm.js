import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'

import { getRepositories } from '../../redux/repo/repo-operations';
import * as searchQueryActions from '../../redux/searchQuery/searchQuery-action';

import useDebounce from '../../hooks/useDebounce';

import { SearchInput } from './SearchForm.style';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('react');

    const debouncedSearchTerm = useDebounce(query, 1000);

    useEffect(() => {
        if (debouncedSearchTerm) {
            const searchQuery = query.trim().toLowerCase();
            if(!searchQuery) {
                info({
                    title: 'Wow wow wow!',
                    text: 'It would be nice to enter something :)',
                    delay: 2000,
                  });
                return;
            }
            dispatch(searchQueryActions.setSearchQuery(searchQuery));
            dispatch(getRepositories(searchQuery, 1));
        }
    }, [debouncedSearchTerm, dispatch]);

    const handleChange = ({ target }) => {
        setQuery(target.value);
        if(target.value === '') {
            dispatch(searchQueryActions.resetSearchQuery())
        };
    };

    return(
        <SearchInput 
        onChange={handleChange} 
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search"/>
    )
}

export default SearchForm;