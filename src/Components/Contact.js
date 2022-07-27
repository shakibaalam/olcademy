import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://young-cove-92360.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                alert('your query information saved')
                reset()
                navigate('/display')
            });
    };
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2  lg:mx-32 my-20'>
            <div>
                <img className='border-2 border-teal-200' src="https://www.copemate.org/wp-content/uploads/2020/09/contact-3.jpg" alt="" />
            </div>
            <div className='border-2 border-teal-200 p-10 shadow-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className=' text-start'>

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
                        <input className='p-2 border-b-2 border-slate-300 w-full' type='text' name='name' placeholder='Your full name' {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })} />
                        {errors.name && <p className=' text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className=' mb-4'>
                        <input className='p-2 border-b-2 border-slate-300 w-full' type='text' placeholder='Subject' {...register("subject", {
                            required: {
                                value: true,
                                message: "Subject is required"
                            }
                        })} />
                        {errors.subject && <p className=' text-red-600'>{errors.subject.message}</p>}
                    </div>

                    <div className=' mb-4'>
                        <textarea className='p-2 border-b-2 border-slate-300 w-full' type='text' placeholder='Your query' {...register("query", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })} />
                        {errors.query && <p className=' text-red-600'>{errors.query.message}</p>}
                    </div>


                    <div className=' flex justify-center mt-10'>
                        <input type="submit" value="Contact us" className=' bg-teal-500 px-8 py-3 rounded-xl text-white text-lg font-bold cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;