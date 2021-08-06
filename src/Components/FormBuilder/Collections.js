import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchCollections, selectAllCollection} from "../../Controllers/reducers/collection";

function Collections({collectionId}) {
  const dispatch = useDispatch()
  const collections = useSelector(selectAllCollection)
  const collectionStatus = useSelector((state) => state.collections.status)
  const error = useSelector((state) => state.collections.error)

  useEffect(() => {
    if(collectionStatus === 'idle'){
      dispatch(fetchCollections())
    }
  }, [collectionStatus, dispatch])

  let content
  if(collectionStatus === 'loading'){
    content = <div className='loader'>Loading...</div>
  }else if (collectionStatus === 'succeeded'){
    content = collections.map((collection) => (
      <option key={collection.id} value={collection.id}> {collection.title} </option>
    ))
  }else if(collectionStatus === 'error'){
    content = <div> {error} </div>
  }


  return (
    <>
      { content }
    </>
  );
}

export default Collections;