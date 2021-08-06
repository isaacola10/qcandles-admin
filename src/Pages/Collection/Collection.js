import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchCollections, selectAllCollection} from "../../Controllers/reducers/collection";
import {AddCollection} from "../../Components/CollectionComponent/AddCollection";
import {CollectionList} from "../../Components/CollectionComponent/CollectionList";


export const Collection = () => {
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
  }else if (collectionStatus === 'succeeded') {
    const orderedCollection = collections
      .slice()
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
    content = <CollectionList collections={orderedCollection} />
  }else if (collectionStatus === 'error') {
    content = <div> {error} </div>
  }


  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Fragrances</Link>
          </li>
        </ol>
        {/*{displayToast && <Toast message={message}/>}*/}

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Collection</h4>
              </div>
              <AddCollection />
            </div>
          </div>
        </div>
        {content}
      </section>
    </div>
  );
}

export default Collection;