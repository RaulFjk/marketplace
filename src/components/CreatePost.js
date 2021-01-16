import React from 'react';
import background from '../jobBack.jpg';
import { connect } from 'react-redux';
import { createPost } from '../store/actions/postsActions';
import { Redirect } from 'react-router';

class CreatePost extends React.Component {

    state = {
        title : '',
        category : '',
        duration : 0,
        location : '',
        role : '' 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // We pass the post we want to create which is the state of the component after we submit the form
        this.props.createPost(this.state);
    }

    render() {
        const { auth } = this.props;

        if(!auth.uid) return <Redirect to='/signin' />


        return(
            <div>
                {/* Create title and description div */}
                <div className='bg-cover bg-center' style= {{ backgroundImage: `url('${background}')` }}>
                    <div className='bg-blue-600 bg-transparent bg-opacity-30'>
                        <div className='ml-80 py-20' >
                            <span className='text-4xl fond-bold'>Create Post</span>
                        </div>
                    </div>
                </div>
                <form className="mx-18 p-5" onSubmit={this.handleSubmit}>
                    <div className="grid grid-cols-6 gap-4">
                        {/* Form on the left side */}
                        <div className="col-start-2 col-span-2">
                            <div className='mr-10'>
                                <div className="">
                                <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                                <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                                </div>
                                <div className="mt-2">
                                <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                                <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                                </div>
                                <div className="mt-2">
                                <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                                </div>
                                <div className="mt-2">
                                <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
                                </div>
                                <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
                                </div>
                                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
                                </div>
                                <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                                <div className="">
                                <label className="block text-sm text-gray-600" for="cus_name">Card</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
                                </div>
                                <div className="mt-4">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Create Post</button>
                                </div>
                            </div>
                        </div>
                        {/*Part of the Form on the right side */}
                        <div className="col-start-4 col-span-2">
                            <div className='mr-10'>
                                <div>
                                    <label className='block text-sm text-gray-00'>Job Title</label>
                                    <input className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} placeholder='Job Title' id="title" />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-sm text-gray-00'>Location</label>
                                    <input className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="location" placeholder='Location' />
                                </div>
                                <div className='mt-8'>
                                    <label className='block text-sm text-gray-00'>Role</label>
                                    <input className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="role" placeholder='Role' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-sm text-gray-00'>Duration</label>
                                    <input className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="duration" placeholder='Duration' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-sm text-gray-00'>Category</label>
                                    <input className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="category" placeholder='Category' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );

    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);