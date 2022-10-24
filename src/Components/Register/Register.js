import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {

    const { createUser, verifyEmail, updateUserProfile, googleSignin, faceBookSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name);
                handleEmailVerifiation();
                toast.success('Verification email sent')
            })
            .catch(error => {
                console.error('error', error)
                toast.error(`${error}`)

            });
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        handleUpdateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handleEmailVerifiation = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })

    }
    const handlegoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })

    }
    const handleFacebookSignIn = () => {
        faceBookSignIn()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('error', error);
            });
    }


    return (
        <div className='mt-10'>
            <form class="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" name='email' placeholder="Enter Your Email" required />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='name' placeholder="Jane" required />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" name='password' placeholder="******************" required />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 mx-10 px-4 rounded" type="submit">
                            Sign Up
                        </button>
                    </div>
                </div>




            </form >
            <div className='flex justify-center mt-4 mb-4 gap-4'>
                <button onClick={handlegoogleSignIn} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <BsGoogle></BsGoogle>
                </button>
                <button onClick={handleFacebookSignIn} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <BsFacebook></BsFacebook>
                </button>
            </div>

            <p className='text-center ml-7 mt-5'>Already have an account?<Link to='/login' className='text-orange-500'> Please Log in</Link></p>


        </div >
    );
};

export default Register;