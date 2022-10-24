import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (



        <div className='text-center flex justify-evenly'>




            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li> <Link to='/bookings'>Bookings</Link> </li>
                            <li> <Link to='/rooms'>Rooms</Link> </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Travelly</Link>
                </div>
                <div class="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} class="btn">Log out</button> : <Link to='/login'><button class="btn">Log in</button></Link>
                    }
                    <button class="btn btn-ghost btn-circle">
                        <Link to='/profile'><p>{user?.email}</p></Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Header;

