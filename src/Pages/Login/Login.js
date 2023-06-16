import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
 
    // To make private route 
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    //   Verift sign in with jwt
    const [siginWithEmail, setSiginWithEmail] = useState('');
    const [token] = useToken(siginWithEmail);

    if(token){
        navigate(from, { replace: true })
        }

    // show login error  
    const [loginError, setLoginError] = useState('');

    

    const handleForm = (data) => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSiginWithEmail(data.email)
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)

            })

    }

    // Google Sign in 
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
    const user = result.user;
    console.log(user);
    })
    .catch(error => {
    console.log('error', error)
    })
    }
    

    return (
        <div className='h-[480px] flex justify-center items-center m-12'>

            <div className='w-96 p-4'>
                <h1 className='text-4xl text-center font-bold'>Login</h1> <br />

                {/* Handle the form  */}
                <form
                    onSubmit={handleSubmit(handleForm)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full " />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", {
                        required: 'Password is required',
                        minLength: { value: 6, message: "Password must be 6 character or longer" }
                    })} className="input input-bordered w-full" />
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    {/* {errors.message && <span className='text-red-600'>Password is required</span>} */}

                    <label className="label">
                        <span className="label-text"> Forgot Password ?</span>
                    </label>
                    <button className='btn btn-accent my-2.5 w-full' value={Login} type='submit'>Login</button>
                </form>

                {/* set login error  */}
                <div>
                    {loginError && <p className='text-center text-red-600'>{loginError}</p>}
                </div>

                <p className='text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;