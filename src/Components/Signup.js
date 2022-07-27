import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://young-cove-92360.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                alert('Sign up information saved')
                reset()
                navigate('/contact')
            });
    };
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2  lg:mx-32 my-20'>
            <div>
                <img className='border-2 border-teal-200' src="https://us.123rf.com/450wm/houbacze/houbacze1709/houbacze170900677/86486775-vector-illustration-background-sign-up-now.jpg?ver=6" alt="" />
            </div>
            <div className='border-2 border-teal-200 p-10 shadow-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className=' text-start'>

                    <div className=' mb-4'>

                        <input className='p-2 border-b-2 border-slate-300 w-full' type='text' name='name' placeholder='Your full name' {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                            maxLength: {
                                value: 20,
                                message: 'Name must be maximum 20 characters'
                            },
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters'
                            }
                        })} />
                        {errors.name && <p className=' text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className=' mb-4'>


                        <input className='p-2 border-b-2 border-slate-300 w-full' type="password" name="" id="" placeholder='Password' {...register("pass", {
                            required: {
                                value: true,
                                message: "password is required"
                            },
                            minLength: {
                                value: 8,
                                message: 'password length should be 8 character'
                            }
                        }
                        )} />
                        {errors.pass && <p className=' text-red-600'>{errors.pass.message}</p>}
                    </div>

                    <div className=' mb-4'>
                        <input className='p-2 border-b-2 border-slate-300 w-full' type="email" placeholder='Your  Email address' {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }

                        })} />
                        {errors.email && <p className=' text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className=' mb-4'>
                        <input className='p-2 border-b-2 border-slate-300 w-full' type="date" name="date" id="date"  {...register("date", {
                            required: {
                                value: true,
                                message: "Date is required"
                            }
                        })} />
                        {errors.date && <p className=' text-red-600'>{errors.date.message}</p>}

                    </div>

                    <div className=' mb-4'>
                        <select name="" id="" className='p-2 border-b-2 border-slate-300 w-full' {...register("gender", {
                            required: {
                                value: true,
                                message: "Gender is required"
                            }
                        })}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        {errors.gender && <p className=' text-red-600'>{errors.gender.message}</p>}
                    </div>

                    <div className=' flex justify-center mt-10'>
                        <input type="submit" value="Sign up" className=' bg-teal-500 px-8 py-3 rounded-xl text-white text-lg font-bold cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;