import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import {  SearchQueryContextProvider,  useQueryValue, usePageNumberValue  } from '../../context';

describe('Query Context', () => {
    test('useQueryValue hook should return the correct query', () => {
        const wrapper = ({ children }) => <SearchQueryContextProvider>{children}</SearchQueryContextProvider>
        const { result } = renderHook(() => useQueryValue(), { wrapper });

        const queries = ["cat", "mouse", "1", "torando"];
        for (const query of queries) {
            act(() => {
                result.current.setQuery(query);
            });
    
            expect(result.current.query).toBe(query);
        }
    });

    test('usePageNumberValue hook should return the correct pageNumber', () => {
        const wrapper = ({ children }) => <SearchQueryContextProvider>{children}</SearchQueryContextProvider>
        const { result } = renderHook(() => usePageNumberValue(), { wrapper });

        const pageNumbers = [1, 1000, 5000, 10000];
        for (const pageNumber of pageNumbers) {
            act(() => {
                result.current.setPageNumber(pageNumber);
            });
    
            expect(result.current.pageNumber).toBe(pageNumber);
        }
    });
});
