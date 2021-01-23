import React from 'react';
import backG from '../header-wall.jpg';
import { NavLink, Redirect } from 'react-router-dom';
import ubbLogo from '../ubbLogo.png';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const LandingPage = (props) => {
    const { auth } = props;

    if(auth.uid) return <Redirect to='/home' />;
    return(  
        <div className="grid grid-cols-2 text-white w-full h-full fixed ...">
             <div className="col-span-1 flex flex-wrap items-start justify-center bg-fixed bg-center bg-content bg-no-repeat " style= {{ backgroundImage: `url('${backG}')` }}>
                 <div className="mt-36 flex justify-center w-full">
                    <div className="items-center">
                        <div className="flex my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-current text-red-600 ..." >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h1 className="font-bold text-3xl text-gray-800 ml-2">
                                <span>Find Job Opportunities</span>
                            </h1>
                        </div>
                        <div className="flex my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-8 w-8 fill-current text-red-600 ..." >
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                            <h1 className="font-bold text-3xl text-gray-800 ml-2"><span>Find Project Opportunities</span></h1>
                        </div>
                        <div className="flex my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-8 w-8 fill-current text-red-600 ...">
                            <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                            </svg>
                            <h1 className="font-bold text-3xl text-gray-800 ml-2"><span>Find Collaboration Opportunities</span></h1>
                        </div>
                    </div>
                 </div>
            </div>
            {/* <img src={backG} alt="Mobile Phone" className="w-1/2 object-content"/> */}
                <div className="col-span-1 flex justify-center  bg-blue-400">
                    <div className="w-full text-white flex md:justify-center text-center md:text-left p-52">
                        <div >
                            <div className="flex justify-center">
                                <h2 className="leading-none font-bold text-2xl xs:text-2x1 text-red-600 md:text-4xl lg:6x1 "><span className="text-blue-800">Welcome to </span>UBB <span className="text-blue-800">Marketplace</span></h2>
                            </div>
                            <div className="flex justify-center md:justify-center md:flex  my-12">
                                <img src={ubbLogo} alt="Mobile Phone" className="mx-1" />
                            </div>
                            <div className="flex justify-center">
                                <NavLink className="px-16 w-96 flex justify-center rounded-full bg-blue-800 text-white font-bold p-4 uppercase border-blue-500 border hover:bg-gray-100 hover:text-gray-700" to='/signup'>
                                    <span>Get started</span>
                                </ NavLink>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(LandingPage);