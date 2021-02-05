import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class SignedInLinks extends React.Component {

    state = {
        open : false,
        notification: false
    }

   componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
    
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                open: false,
                notification: false
            });
        }
    }

    handleDropdown = () => {
        if (this.state.open === false){
            this.setState({
                open: true
            });
        }else{
            this.setState({
                open: false
            });
        }
    }

    handleNotification = () => {

        if (this.state.notification === false){
            this.setState({
                notification: true
            });
        }else{
            this.setState({
                notification: false
            });
        }
    }

    handleNavClick() {
        if (this.state.open === true){
            this.setState({
                open: false,
                notification: false
            }); 
        }
    }

 

    render() {
        const { profile, notifications } = this.props;
        return (   
            <div className='flex my-2'>
                <div className='justify-center'>
                    <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                        <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                            <NavLink onClick={() => this.handleNavClick()} to="/home">Home</NavLink>
                        </li>
                        {profile.role !== 'student' &&
                        <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                            <NavLink onClick={() => this.handleNavClick()} to="/myPosts">My Posts</NavLink>
                        </li>
                        }

                        <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                            <NavLink onClick={() => this.handleNavClick()} to='/partners'>Partners</NavLink>
                        </li>
                        {profile.role !== 'student' && 
                            <li>
                            <NavLink onClick={() => this.handleNavClick()} className="bg-red-600 text-white pl-2 pr-5 py-2 rounded border border-red-600  hover:bg-blue-500 mx-2 hover:text-gray-100" to='/createPost'>
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 mr-1 inline-block">
                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                                </svg>
                                Create Post
                            </NavLink>
                            </li>
                        }
                        {profile.role === 'admin' &&
                        <li>
                            <NavLink onClick={() => this.handleNavClick()} className="bg-red-600 text-white pl-2 pr-5 py-2 rounded border border-red-600  hover:bg-blue-500 mx-2 hover:text-gray-100" to='/settings'>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" className=" text-white fill-current w-6 h-6 mr-1 inline-block">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 
                                2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379
                                1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3
                                    3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                Manage App 
                            </NavLink>
                        </li> }
                        <li>
                            <a onClick={this.props.signOut} className="bg-transparent text-white px-5 py-2 mr-4 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700" >Sign Out</a>
                        </li>
                        {profile.role === 'student' && 
                        <li>
                            <button className="transition duration-500 ease-in-out relative z-10 block rounded-md bg-gradient-to-r from-green-400 to-blue-500 ... p-2 focus:outline-none transform hover:-translate-y-1 hover:scale-110 ..." onClick={() => this.handleNotification()}>
                                <svg className="h-5 w-5 text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                            {this.state.notification === true && (
                                <div>
                                    <Notifications notifications={notifications} /> 
                                </div> ) } 
                        </li> }
                        <li>  
                                <button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 ... text-xl p-2 mr-4 ml-2 text-center cursor-pointer focus:outline-none h-12 w-12"  >
                                {/* <div className="rounded-full h-24 w-24 flex items-center justify-center... bg-gradient-to-r from-green-400 to-blue-500 ..."> */}
                                 {profile.initials}
                                </button> 
                                {/* <div x-show="dropdownOpen"  class="fixed inset-0 h-full w-full z-10"></div> */}
                                {this.state.open === true && (
                                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                                    <NavLink onClick={() => this.handleNavClick()} className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-800 hover:text-white" to='/profile'>
                                    Your profile
                                    </NavLink>
                                </div>
                                )}
                        </li>
                    </ul>
                </div>
                {/* <div className='pt-1 mr-2'>
                    <button className="bg-red-600 text-white  px-4 py-1 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100">Create Post</button>
                    <button className="bg-transparent text-white  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Sign out</button>
                </div> */}
            </div>
            


        ); }

}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        notifications: state.firestore.ordered.notifications || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    };
}

export default compose(
 connect(mapStateToProps,mapDispatchToProps),
 firestoreConnect((props) => [
     { collection: "notifications", limit:4, orderBy: ['time', 'desc'] }])
 )(SignedInLinks);