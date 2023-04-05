import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div>
                <h1 text-4xl >Login</h1> <br />

                {/* Handle the form  */}

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    {/* <input {...register("firstName")} placeholder="First name" /> */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    <p>{data}</p>
                    <button className='btn btn-accent'>Submit</button>
                </form>
            </div>




        </div>
    );
};

export default Login;