import React from 'react';
import backG from '../header-wall.jpg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends React.Component {

render() {
    const { auth } = this.props;

    const options = [
        'one', 'two', 'three'
      ];

    const defaultOption = options[0];

    if(auth.uid) return <Redirect to='/home' />;
    return(
        <div className="grid min-h-screen place-items-center bg-fixed  bg-center bg-cover bg-no-repeat" style= {{ backgroundImage: `url('${backG}')` }}>
            <div className="leading-loose bg-blue-600 rounded-lg shadow-xl bg-transparent bg-opacity-70 w-1/2 ">
                <form className="max-w-xl p-10 mx-20 my-5" onSubmit={this.handleSubmbit}>
                    <p className="text-gray-800 font-medium mb-4 text-xl">Sign Up</p>
                    <div className="">
                        <label className="block text-base text-dark font-semibold" for="cus_email">Email</label>
                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" onChange={this.handleChange} id="email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-semibold text-dark" for="firstName">First Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="firstName" onChange={this.handleChange}  type="text" required="" placeholder="Your Name" aria-label="Name"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-semibold text-dark" for="lastName">Last Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="lastName" onChange={this.handleChange} type="text" required="" placeholder="Your Name" aria-label="Name"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-semibold text-dark" for="passowrd">Password</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="passowrd" onChange={this.handleChange} type="password" required=""  aria-label="Password"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-semibold text-dark" for="role">Member Type(Role)</label>
                        <select className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">
                            <option value="grapefruit">Student</option>
                            <option value="lime">Company</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};
export default connect(mapStateToProps)(SignUp);