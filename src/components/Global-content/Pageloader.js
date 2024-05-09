import React,{ useState, useEffect } from 'react';

export default function PageLoader() {

  return (
   
    <div className={'page-loader'} style={{display: 'none'}}>
      <div className="bounceball"><div className="pin">Loading</div></div>
    </div>
  );
}
