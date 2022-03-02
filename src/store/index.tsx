import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryItemType } from './types';
import PrintData from './PrintData';

const Store = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState<CategoryItemType[]|null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/data_test.json`)
    //axios.get(`https://cryptic-badlands-15292.herokuapp.com/getData`)
    .then(res => {
      const store: CategoryItemType[] = res.data;
      setData(store);
      setLoadingData(false);
    }).catch(() => {
      setData(null);
      setLoadingData(true);
    });

  }, []);
  

  return (
    <div className="store">
      {loadingData &&
        <div className='message'>
          <p className='loading'>The app is loading the necesary data to be shown. This may take a several time, be patient.</p>
        </div>
      }
      {!loadingData && data &&
        <div className='listWrapper'>
          <PrintData data={data} />
        </div>
      }
    </div>
  )
}

export default Store;
