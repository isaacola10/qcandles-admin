import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

import {getCategories as listCategories} from "../../Controllers/actions/category";

export const Category = ({categoryId}) => {
    const dispatch  = useDispatch()

    const getCategories = useSelector((state) => state.getCategories)
    const {categories, loading, error} = getCategories

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch])
    return (
        <>
            {loading ? (
                <option>Loading...</option>
            ) : error ? (
                <option>{error}</option>
            ) : categories ? (
                categories.map((category, index) => (
                    <option selected={categoryId === category.id} value={category.id} key={index}>{category.category_name}</option>
                ))
            ) : (
                <option>No Categories Loaded</option>
            )}
        </>
    );
}