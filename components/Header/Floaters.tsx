"use client"
import React, { useEffect, useState } from 'react';
import Floater from './Floater';
import Floater2 from './Floater2';

const Floaters = () => {
  const [refresh, setRefresh] = useState(false);
  const [refresh2, setRefresh2] = useState(false);

  const showFloater = () => {
    if (refresh) {
      setRefresh(false);
      setRefresh2(true);
    } else {
      setRefresh(true);
      setRefresh2(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(showFloater, 6000); // Interval to toggle between refresh and refresh2
    return () => {
      clearInterval(interval);
    };
  }, [refresh, refresh2]);
  

  return (
    <div className="relative h-[500px] w-full">
      <div className={`absolute w-full top-0 ${refresh ? 'block' : 'hidden'}`}>
        <Floater refresh={refresh} />
      </div>
      <div className={`relative top-0 ${refresh2 ? 'block' : 'hidden'}`}>
        <Floater2 refresh2={refresh2} />
      </div>
    </div>
  );
};

export default Floaters;
