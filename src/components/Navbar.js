import React from 'react';
import backG from '../try.jpg';
import avatar from '../avatar.jpg'
import ubbAvatar from '../ubb.png';
import '../css/Navbar.css';
import FilterBar from './FilterBar';
import { Link } from 'react-router-dom';
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
                        <Link to='/home' >
                            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 " id="menu">
                                    <img className="w-12 h-12 bg-white ml-auto mr-2 rounded-full" src={ubbAvatar} />
                                    <span className='mr-1 text-xl text-red-600 mb-1 font-bold '>UBB</span>
                                    <span className='text-xl text-blue-400 mb-1'>Marketplace</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div >
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

