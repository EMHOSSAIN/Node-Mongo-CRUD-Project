import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiEditAlt } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'
import Loading from './Loading/Loading';
import ModelForUpateData from './Models/ModelForUpateData';



const FacebookLoginPage = () => {
    // const [users, setUser] = useState([])
    const [userData, setUserdata] = useState()
    // const [displayUsers, setDisplayUsers] = useState(users)
    // useEffect(() => {
    //     fetch('https://student-library-surver.vercel.app/data')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, []);

    // const handleDelate = (da) => {
    //     const Agree = window.confirm(`Are you want to delete: ${da.email}`)

    //     if (Agree) {
    //         fetch(`https://student-library-surver-emhossain.vercel.app/data/${da._id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount > 0) {
    //                     alert('Successfully deleted')
    //                     const remaining = displayUsers.filter(displayUser => displayUser._id !== da._id)
    //                     setDisplayUsers(remaining)

    //                 }
    //             })
    //     }
    // }


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => fetch('https://student-library-surver.vercel.app/data')

            .then(res => res.json())



    })

    if (isLoading) {
        return <Loading></Loading>
    }
    //    handler for delete data

    const handleDelate = (da) => {
        fetch(`https://student-library-surver-emhossain.vercel.app/data/${da._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                refetch()

                toast.success("Successfully Deleted")
            })

    }


    // handler for wish data setup
    const handlewish = (id) => {
        fetch(`https://student-library-surver-emhossain.vercel.app/data/like/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    toast.success('SUccessfully added data in Home Page')
                }
                console.log(data)
               
            })

    }


    return (
        <div className='grid grid-cols-3 lg:grid-cols-3 gap-5 '>
            {
                users.map(da => <div className="card w-96 bg-neutral text-neutral-content mt-10 ml-4" key={da._id}>
                    <div className='ml-3 mt-1 flex justify-between'>

                        <div>
                            <label onClick={() => setUserdata(da)} htmlFor="my-modal-3" className="btn" title='Edit'><BiEditAlt className='text-xl hover:bg-white h-12 w-12 rounded-full' /></label>
                        </div>

                        <div>  <button onClick={() => handleDelate(da)} className=' mr-2   py-1 px-2 text-xl hover:bg-red-600 rounded-full' title='Delete'>X</button></div>
                    </div>

                    <div className="card-body items-center text-center ">

                        <h2 className="card-title">{da.email}</h2>
                        <p>{da.password}</p>
                        <div className="card-actions justify-end">

                        </div>
                        <button onClick={() => handlewish(da._id)} className=' absolute right-2 bottom-3 '><FaHeart className='text-2xl' title='Add Card in Home Page'></FaHeart></button>
                    </div>

                    <ModelForUpateData
                    setUserdata={setUserdata}
                        refetch={refetch}
                        userData={userData}
                    >
                    </ModelForUpateData>
                </div>
                )
            }
        </div>
    );
};

export default FacebookLoginPage;