import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuerySuggestions } from "../apis/videos";
import { addSearchQueries, toggleIsSearchOpen } from "../redux/searchSlice";

export const useSearch = (query) => {
    const {searchQueries, isSearchOpen} = useSelector(store => store.search);

    const dispatch = useDispatch();

    useEffect(() => {
        let timer;
        if(!searchQueries[query]) {
            timer = setTimeout(async () => {
                const result = await getQuerySuggestions(query);
                
                if(result) {
                    dispatch(addSearchQueries({ key: query, value: result }));
                    dispatch(toggleIsSearchOpen(true));
                }
            }, 200);
        }

        return () => clearInterval(timer);
    }, [query]);

    return [searchQueries, isSearchOpen];
}