import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const SignedInLinks = () => {

    return (   
        <div className='flex my-2'>
            <div className='justify-center'>
                <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                    <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                        <NavLink to='/partners'>Partners</NavLink>
                    </li>
                    <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-red-600 text-white px-5 py-2 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100" to='/createPost'>Create Post</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-transparent text-white px-5 py-2  rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700" to='/signout'>Sign Out</NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className='pt-1 mr-2'>
                <button className="bg-red-600 text-white  px-4 py-1 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100">Create Post</button>
                <button className="bg-transparent text-white  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Sign out</button>
            </div> */}
        </div>
        


    );

}

export default withRouter(SignedInLinks);