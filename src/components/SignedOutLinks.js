import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const SignedOutLinks = () => {
    return (
        <div className='flex my-2 py-2 mx-2 '>
            <div className='justify-center'>
                <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                    <li>
                        <NavLink className="bg-red-600 text-white  px-9 py-2 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100" to='/signin'>Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-transparent text-white  px-9 py-2 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700" to='/signup'>Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default withRouter(SignedOutLinks);
