import React from 'react';
import background from '../jobBack.jpg';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Profile extends React.Component{

    render(){
        const { profile, auth } = this.props;
        return(
        <div className=" grid grid-cols-3">
             <div className='col-start-1 col-span-3 bg-cover bg-center' style= {{ backgroundImage: `url('${background}')` }}>
                        <div className='bg-blue-600 bg-transparent bg-opacity-30 '>
                        <div className='ml-80 py-20' >
                            <span className='text-4xl fond-bold'>Profile</span>
                        </div>
                        </div>
                </div>
            <div className="col-start-2 col-span-1">
                <form className="w-full">
                <div className="flex justify-center w-full">
                                <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 ... text-2xl font-bold p-10  cursor-pointer focus:outline-none" onClick={() => this.handleDropdown()} >
                                    RD
                                </div>
                            </div>
                    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                        <div className="md:w-2/3 max-w-sm mx-auto">
                        <label className="text-sm text-gray-400">Email</label>
                        <div className="w-full inline-flex border rounded">
                            <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                            <svg
                                fill="none"
                                className="w-6 text-gray-400 mx-auto"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            </div>
                            <input
                            type="email"
                            value={auth.email}
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2 text-gray-700 bg-gray-200 hover:bg-gray-100"
                            placeholder="email@example.com"
                            disabled
                            />
                        </div>
                        </div>
                 </div>

                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
                        <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                        <div>
                            <label className="text-sm text-gray-400">Name</label>
                            <div className="flex">
                                <div className="w-full mr-6 inline-flex border rounded">
                                <div className="w-2/12 pt-2 bg-gray-100">
                                    <svg
                                    fill="none"
                                    className="w-5 text-gray-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={profile.firstName}
                                    className="w-10/12 focus:outline-none focus:text-gray-600 p-2 text-gray-700 bg-gray-200 hover:bg-gray-100"
                                    placeholder="First Name"
                                />
                                </div>
                                <div className="w-full inline-flex border rounded">
                                <div className="w-2/12 pt-2 bg-gray-100">
                                    <svg
                                    fill="none"
                                    className="w-5 text-gray-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={profile.lastName}
                                    className="w-10/12 focus:outline-none focus:text-gray-600 p-2 text-gray-700 bg-gray-200 hover:bg-gray-100"
                                    placeholder="Last Name"
                                />
                                </div>
                            </div> 
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Phone number</label>
                            <div className="w-full inline-flex   border rounded">
                            <div className="pt-2 w-1/12 bg-gray-100 ">
                                <svg
                                fill="none"
                                className="w-6 text-gray-400 mx-auto"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="w-11/12 focus:outline-none  focus:text-gray-600 p-2 text-gray-700 bg-gray-200 hover:bg-gray-100"
                                placeholder="12341234"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-20">
                        <button className="w-64 mx-20 py-3 text-white font-light tracking-wider bg-red-600 rounded" type="submit">
                                        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 mr-3 inline-block">
                                        <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                        l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                        c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                        L5.68,17.217z"/>
                                        </svg>
                                        Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
        );
    }

}

const mapStateToProps = (state) => {
    return{
        profile: state.firebase.profile,
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps)(Profile);