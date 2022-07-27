import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Display = () => {
    const [contacts, setContact] = useState([])

    useEffect(() => {
        fetch("https://young-cove-92360.herokuapp.com/contact", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContact(data)
            });
    }, [])

    return (
        <div>
            <div className=' flex justify-center my-10'>
                <table className='border-separate border-spacing-2 border border-slate-500 bg-slate-200'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 bg-slate-300'>Id</th>
                            <th className='border border-slate-600 bg-slate-300'>Email</th>
                            <th className='border border-slate-600 bg-slate-300'>Name</th>
                            <th className='border border-slate-600 bg-slate-300'>Subject</th>
                            <th className='border border-slate-600 bg-slate-300'>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts && contacts.map(contact => <tr key={contact._id}>
                            <td className='border border-slate-700 p-4 '>{contact._id}</td>
                            <td className='border border-slate-700 p-4 '>{contact.email}</td>
                            <td className='border border-slate-700 p-4 '>{contact.name}</td>
                            <td className='border border-slate-700 p-4 '>{contact.subject}</td>
                            <td className='border border-slate-700 p-4 '>{contact.query}</td>

                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Display;