import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';



const Login = () => {
    const { signIn, forgotPass, googleSignin, faceBookSignIn } = useContext(AuthContext);
    const [userEmail, setLoading, setUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {

                    navigate(from, { replace: true });
                    toast.success('Succesfully Logged in')
                }
                else {
                    toast.error('Your email is not verified')
                }
            })
            .catch(error => {
                console.error('error', error);
                toast.error(`${error}`)
            })

    }
    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }
    const handleforgotPass = () => {
        forgotPass(userEmail)
            .then(() => { })
            .catch(error => console.error('error', error));
        toast.success('Reset password email sent to your email!')


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
            <form class="w-full mx-auto max-w-sm" onSubmit={handleSubmit}>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input onBlur={handleEmailBlur} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" name='email' required />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" name='password' placeholder="******************" required />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-7 rounded" type="submit">
                            Log in
                        </button>
                    </div>
                </div>

            </form>
            <div className='flex justify-center mt-4 mb-4 gap-4'>
                <button onClick={handlegoogleSignIn} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <BsGoogle></BsGoogle>
                </button>
                <button onClick={handleFacebookSignIn} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <BsFacebook></BsFacebook>
                </button>
            </div>
            <p className='text-center ml-7 mt-5'>Don't have an account?  <Link to='/register' className='text-orange-500'>Please register</Link></p>

            <div className='mt-5 p-2 mx-28'><button onClick={handleforgotPass}>Forget Password?</button></div>

        </div>
    );
};

export default Login;