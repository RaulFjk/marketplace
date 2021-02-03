import React from 'react';
import ubbLogo from '../ubb.png';
import backG from '../header-wall.jpg';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router';

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/home' />;
        return (
            <div className="grid grid-cols-6 w-full h-full place-items-center bg-fixed  bg-center bg-cover bg-no-repeat fixed ..." style= {{ backgroundImage: `url('${backG}')` }}>
                <div className="col-start-2 col-span-4 p-12 bg-blue-600 mb-5 rounded-lg shadow-xl bg-transparent bg-opacity-60 sm:w-8/12 md:w-1/2 lg:w-7/12">
                    <form className="" onSubmit={this.handleSubmit}>
                        <div className="flex justify-center mb-5"><img className="w-36 h-36 bg-white rounded-full" src={ubbLogo}  /></div>
                        <h1 className="text-3xl w-full font-bold text-dark flex justify-center mb-5 "><span>Sign in</span></h1>
                        <label for="email" className="block text-s font-semibold text-dark uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Enter your email"  onChange={this.handleChange} className="block rounded-lg w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="password" className="block mt-2 text-s font-semibold text-dark uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="Enter your password"  onChange={this.handleChange} className="block rounded-lg w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign in
                        </button>
                        <p className="flex justify-between inline-block mt-4 text-s font-semibold text-white cursor-pointer hover:text-black">Forgot password?</p>
                        {authError && (
                            <div>
                                <span className="text-red-600 font-bold text-lg">{authError}. Please try again!</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
