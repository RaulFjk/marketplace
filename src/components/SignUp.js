import React from 'react';
import backG from '../header-wall.jpg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class SignUp extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        role: '' ,
        company:''         
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmbit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }


render() {
    const { auth, authError, categories, companies } = this.props;
    if(auth.uid) return <Redirect to='/home' />;

    return(
        <div className="grid grid grid-cols-6 place-items-center bg-fixed fixed w-full h-full bg-center bg-cover bg-no-repeat" style= {{ backgroundImage: `url('${backG}')` }}>
            <div className="col-start-2 col-span-4 leading-loose bg-blue-600 rounded-lg shadow-xl bg-transparent bg-opacity-70 sm:w-8/12 md:w-1/2 lg:w-7/12 ">
                <form className="p-10 mx-4 my-5" onSubmit={this.handleSubmbit}>
                    <p className="text-gray-800 font-medium mb-4 font-bold text-2xl">Sign Up</p>
                    <div className="">
                        <label className="block text-base text-dark font-bold" for="cus_email">Email*</label>
                        <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" required onChange={this.handleChange} id="email" type="text"   aria-label="Email"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-bold text-dark" for="firstName">First Name*</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" required id="firstName" onChange={this.handleChange}  type="text"  aria-label="Name"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-bold text-dark" for="lastName">Last Name*</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" required id="lastName" onChange={this.handleChange} type="text"   aria-label="Name"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-bold text-dark" for="passowrd">Password*</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" required id="password" onChange={this.handleChange} type="password"   aria-label="Password"/>
                    </div>
                    <div className="mt-2">
                        <label className="block text-base font-bold text-dark" for="role">Member Type(Role)*</label>
                        <select className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded capitalize"  required defaultValue="" id="role" onChange={this.handleChange}>
                            <option hidden value=""></option>
                            {categories.length === 0 ? (<option></option>): (categories.map( category => ( <option className="capitalize" value={category.name}>{category.name}</option>
                            ))
                            )
                            }
                        </select>
                    </div>
                    {this.state.role === "company" && (
                    <div className="mt-2">
                        <label className="block text-base font-semibold text-dark" for="role">Company*</label>
                        <select className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded capitalize" defaultValue="" id="company" onChange={this.handleChange}>
                            <option hidden value=""></option>
                            {companies.length === 0 ? (<option></option>): (companies.map( company => ( <option value={company.id}>{company.name}</option>
                            ))
                            )
                            }
                        </select>
                    </div>
                    )}
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Sign up
                    </button>
                    <div>{ authError &&
                        (<span className="text-red-600 font-bold text-lg">{authError}</span>)}
                    </div>
                </form>
            </div>
        </div>
    );
}

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        categories: state.firestore.ordered.categories || state.category.categories,
        companies: state.firestore.ordered.companies   || state.company.companies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
firestoreConnect(["categories","companies"])
)(SignUp);