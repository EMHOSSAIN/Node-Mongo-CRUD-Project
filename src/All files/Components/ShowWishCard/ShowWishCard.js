import { useQuery } from '@tanstack/react-query';
import React from 'react';


const ShowWishCard = () => {
    const {data: likes=[],}=useQuery({
queryKey:['userwish'],
queryFn:async => fetch('https://student-library-surver-emhossain.vercel.app/userwish')
.then(res=>res.json())



    })
    
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 w-8/12 m-auto'>
            {
                likes.map(like=> <div className="card w-96 bg-base-100 shadow-xl" key={like._id}>
                {/* <figure className="px-10 pt-10">
                  <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure> */}
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{like.email}</h2>
                  <p>password</p>
                  <div className="card-actions">
                   
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default ShowWishCard;