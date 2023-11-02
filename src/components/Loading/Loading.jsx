import React from 'react'
import littleLemonlogo from '../../assets/little-lemon-logo.png';
import SyncLoader from "react-spinners/SyncLoader";

export function Loading({testId = 'loading-component'}) {
  return (
    <article data-testid={testId} className='min-h-screen absolute top-0 left-0 grid items-center justify-center bg-loadingColor' style={{minWidth:'100vw'}}>
        <div>
        <img src={littleLemonlogo} className='w-56 block m-auto' alt="little-lemon"></img>
            <SyncLoader className='w-15 text-center mt-5' color='#F3CB14' size={15} />
        </div>
    </article>
  )
}