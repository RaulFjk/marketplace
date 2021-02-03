import React from 'react';
import background from '../jobBack.jpg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addCompany } from '../store/actions/companiesAction';
import { firestoreConnect } from 'react-redux-firebase';
import firebase from '../config/fbConfig';

class AddCompany extends React.Component{

    state = {
        name: '',
        headquarters: '',
        industry: '',
        size: '',
        website: '',
        description: '',
        fileUrl: ''
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleFileUpload = async (e) => {

        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();

        this.setState({
            fileUrl: fileUrl
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // We pass the post we want to create which is the state of the component after we submit the form
        this.props.addCompany(this.state);
        this.props.history.push('/partners');
    }

    render(){
        return(
    <div>
            <div className='bg-cover bg-center' style= {{ backgroundImage: `url('${background}')` }}>
            <div className='bg-blue-600 bg-transparent bg-opacity-30'>
                <div className='ml-80 py-20' >
                    <span className='text-4xl fond-bold'>Add Company</span>
                </div>
            </div>
        </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-3 col-end-5 max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                    <form onSubmit={this.handleSubmit}>
                        <p className="text-gray-800 text-2xl my-4 font-medium">Company Information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00 font-semibold" for="cus_name">Name</label>
                            <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="name" onChange={this.handleChange} type="text" required="" placeholder="Company Name"/>
                        </div>
                        <div class="mt-2">
                            <label className="block text-sm text-gray-600 font-semibold" for="cus_email">Headquarters Location</label>
                            <input className="w-full px-2  py-4 text-gray-700 bg-gray-200 rounded" id="headquarters" onChange={this.handleChange} type="text" required="" placeholder="Headquarters" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600 font-semibold"  for="cus_email">Industry</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="industry" onChange={this.handleChange} type="text" required="" placeholder="Industry" />
                        </div>
                        <div className="mt-2">
                            <label className="text-sm block text-gray-600 font-semibold" for="cus_email">Size (Employees)</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="size" onChange={this.handleChange} type="text" required="" placeholder="Size"/>
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600 font-semibold" font-semibold for="cus_email">Website</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="website" onChange={this.handleChange}  type="text" required="" placeholder="Website" />
                        </div>
                        <div className="mt-2">
                            <label className='block text-lg font-semibold  text-gray-600'>Description</label>
                            <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 hover:bg-gray-100 rounded' cols="10" rows="20"  autoComplete="off" id="description" onChange={this.handleChange} placeholder='Description' />
                        </div>
                        <div className="mt-2">
                            <label className='block text-lg font-semibold  text-gray-00'>Add File</label>
                            <input type="file" onChange={this.handleFileUpload} />
                        </div>
                        <div className="mt-5 flex justiy-center">
                            <button onClick={this.handleChange} className="w-full mx-5 py-3 text-white font-light tracking-wider bg-red-600 rounded" type="submit">
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 mr-1 inline-block">
                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                                </svg>
                                Add Company
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCompany: (company) => dispatch(addCompany(company))
    };
};

export default compose(
 connect(null, mapDispatchToProps),
)(AddCompany);