import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import ReactDOM from 'react-dom';

class SignedInLinks extends React.Component {

    state = {
        open : false
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
                open: false
            });
        }
    }

    handleDropdown() {
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

    handleNavClick() {
        if (this.state.open === true){
            this.setState({
                open: false
            }); 
        }
    }

 

    render() {
        const { profile } = this.props;
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
                        <li className="inline-block text-white no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                            <NavLink onClick={() => this.handleNavClick()} to='/contact'>Contact Us</NavLink>
                        </li>
                        {profile.role !== 'student' && 
                            <li>
                            <NavLink onClick={() => this.handleNavClick()} className="bg-red-600 text-white pl-2 pr-5 py-2 rounded border border-red-600  hover:bg-blue-500 mx-2 hover:text-gray-100" to='/createPost'>
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 mr-1 inline-block">
                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                                </svg>
                                Create Post
                            </NavLink>
                            </li>
                        }
                        <li>
                            <a onClick={this.props.signOut} className="bg-transparent text-white px-5 py-2  rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700" >Sign Out</a>
                        </li>
                        <li>
                                <button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 ... text-xl p-3 mx-4 cursor-pointer focus:outline-none" onClick={() => this.handleDropdown()} >
                                    {profile.initials}
                                </button>
                                {/* <div x-show="dropdownOpen"  class="fixed inset-0 h-full w-full z-10"></div> */}
                                {this.state.open === true && (
                                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                    <NavLink onClick={() => this.handleNavClick()} className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-800 hover:text-white" to='/profile'>
                                    Your profile
                                    </NavLink>
                                    <NavLink onClick={() => this.handleNavClick()}  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-800 hover:text-white" to='/notifications'>
                                    Notifications
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
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);