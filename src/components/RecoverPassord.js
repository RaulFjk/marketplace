import React from 'react';
import ubbLogo from '../ubb.png';
import backG from '../header-wall.jpg';
import { connect } from 'react-redux';
import { recoverPassword } from '../store/actions/authActions';
import { Redirect } from 'react-router';

class RecoverPassword extends React.Component {

    state = {
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.recoverPassword(this.state.email);
        this.props.history.push('/signin');
      
    }


render(){
    return(
        <div className="grid grid-cols-6 w-full h-full place-items-center bg-fixed  bg-center bg-cover bg-no-repeat fixed ..." style= {{ backgroundImage: `url('${backG}')` }}>
        <div className="col-start-2 col-span-4 p-12 bg-blue-600 mb-5 rounded-lg shadow-xl bg-transparent bg-opacity-60 sm:w-8/12 md:w-1/2 lg:w-7/12">
            <form className="" onSubmit={this.handleSubmit}>
                {/* <div className="flex justify-center mb-5"><img className="w-36 h-36 bg-white rounded-full" src={ubbLogo}  /></div> */}
                <h1 className="text-3xl w-full font-bold text-dark flex justify-start mb-5 "><span>Recover Password</span></h1>
                <label for="email" className="block text-s font-bold text-dark uppercase">E-mail</label>
                <input id="email" type="email" name="email"   onChange={this.handleChange} className="block rounded-lg w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                   Reset Password
                </button>
            </form>
        </div>
    </div>
    ); }
}


const mapDispatchToProps = (dispatch) => {
    return {
        recoverPassword: (email) => dispatch(recoverPassword(email))
    };
}


export default connect(null, mapDispatchToProps)(RecoverPassword);

