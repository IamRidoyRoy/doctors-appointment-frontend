import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleForm = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[480px] flex justify-center items-center'>

            <div className='w-96 p-4'>
                <h1 className='text-4xl text-center font-bold'>Login</h1> <br />

                {/* Handle the form  */}
                <form
                    onSubmit={handleSubmit(handleForm)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} className="input input-bordered w-full " />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password")} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text"> Forgot Password ?</span>
                    </label>
                    <button className='btn btn-accent my-2.5 w-full' value={Login} type='submit'>Login</button>
                </form>
                <p className='text-center'>New to Doctors Portal? <Link className='text-secondary'>Create new account</Link></p>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;