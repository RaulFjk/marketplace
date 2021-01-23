import React from 'react';
import backG from '../try.jpg';
import avatar from '../avatar.jpg'
import ubbAvatar from '../ubb.png';
import '../css/Navbar.css';
import FilterBar from './FilterBar';
import Dropdown from 'react-dropdown';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    // state = {
    //     on: false
    // }

    // toggle = () => {
        
    //     this.setState({
    //         on: !this.state.on
    //     })
    // }

        var  options = ['Job, Internship, Project'];
        var defaultOption = options[0];
        //if uid exists then user exists and is logged in => navbar shows SignedIn Links else SignedOut Links
        const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
        return(
            <nav id="header" className="w-full flex flex-wrap z-30 top-10 py-1 bg-blue-800 shadow-2xl justify-between pt-2" >
                <div className='flex my-2'>
                    <div className="flex px-8 ">
                        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                                <img className="w-12 h-12 bg-white ml-auto mr-2 rounded-full" src={ubbAvatar} />
                                <span className='mr-1 text-xl text-red-600 mb-1 font-bold '>UBB</span>
                                <span className='text-xl text-blue-400 mb-1'>Marketplace</span>
                        </div>
                    </div>
                </div>
                <div >
                    {/* <div className='justify-center'>
                        <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                            <li><a className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                            <li><a className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                            <li><a className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
                        </ul> 
                    </div>
                    <div className='pt-1 mr-2'>
                        <button className="bg-red-600 text-white  px-4 py-1 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100">Create Post</button>
                        <button className="bg-transparent text-white  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Sign out</button>
                        <button className="bg-transparent text-white  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                        <button className="bg-red-600 text-white  px-4 py-1 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100">Sign up</button>    
                    </div> */}
                    {/* <SignedInLinks />
                    <SignedOutLinks /> */}
                    {links}
                </div>
            </nav>
            
        );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps)(Navbar);

