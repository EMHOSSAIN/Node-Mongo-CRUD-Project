import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbaritems=<>
    <li><Link to='/' >Home</Link></li>
    <li><Link to='/facebooklogin' ></Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                   <p className='text-2xl'>Node Mongo CRUD</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navbaritems}
                          
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;