import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchFragrances, selectAllFragrances} from "../../Controllers/reducers/fragrance";
import MultiSelect from "react-multi-select-component";

export const Fragrances = ({fragranceId}) => {
  const dispatch = useDispatch()
  const fragrances = useSelector(selectAllFragrances)
  const options = fragrances.map((fragrance) => (
    { label: fragrance.title, value: fragrance }
  ))
  const fragranceStatus = useSelector((state) => state.fragrances.status)
  const error = useSelector((state) => state.fragrances.error)
  const [selected, setSelected] = useState([])
  useEffect(() => {
    if(fragranceStatus === 'idle') {
      dispatch(fetchFragrances())
    }
  }, [fragranceStatus, dispatch])

  let content
  if(fragranceStatus === 'loading'){
    content = <div className='loader'>Loading...</div>
  }else if (fragranceStatus === 'succeeded'){
    // content = fragrances.map((fragrance) => (
    //   <option key={fragrance.id} value={fragrance.id}> {fragrance.title} </option>
    // ))
    content = <MultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy='Select' />
  }else if(fragranceStatus === 'error'){
    content = <div> {error} </div>
  }


  return (
    <>
      { content }
    </>
  );
}