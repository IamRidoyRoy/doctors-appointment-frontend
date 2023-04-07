import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)
    const handleForm = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className='h-[480px] flex justify-center items-center m-12 '>

                <div className='w-96 p-4'>
                    <h1 className='text-4xl text-center font-bold'>Sign Up</h1> <br />

                    {/* Handle the form  */}
                    <form
                        onSubmit={handleSubmit(handleForm)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" {...register("name", { required: true })} className="input input-bordered w-full " />
                        {errors.email && <span className='text-red-600'>Name is required</span>}

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
                            minLength: { value: 6, message: "Password must be 6 character or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password have Uppercase, Number & Special Character' },

                        })} className="input input-bordered w-full" />
                        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                        <label className="label">
                            <span className="label-text"> Forgot Password ?</span>
                        </label>
                        <button className='btn btn-accent my-2.5 w-full' value={Signup} type='submit'>Sign Up</button>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div >
    );
};

export default Signup;


