
import { toast } from 'react-hot-toast';

const ModelForUpateData = ({userData,refetch}) => {
    
   
    const handleSubmit =(event)=>{
        event.preventDefault()
        // setDisable(true)

        const form = event.target
        const email = form.email.value
        const password = form.password.value

       const submition = {
        email,password
       }
       fetch(`https://student-library-surver-emhossain.vercel.app/data/${userData?._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(submition)

       })
       .then(res=> res.json())
    .then(data=> {
        if(data.modifiedCount>0){
            toast.success('User Updated')
            refetch()
            form.reset()
        }
        console.log(data)
    })

    }
    return (
        <div className='bg-gray-400'>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative h-60">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='relative mt-4'>
                       
                   <form onSubmit={handleSubmit}>
                   <input name='email' type="text" defaultValue={userData?.email} className="input input-bordered input-primary w-full max-w-xs" />
                    <input name='password' type="text" defaultValue={userData?.password}  className="input input-bordered input-primary w-full max-w-xs mt-4" /><br/>
                    <button type='submit' className='btn btn-secondary absolute right-3 '>Submit</button>
                   </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelForUpateData;