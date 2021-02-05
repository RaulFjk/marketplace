import React from 'react';
import background from '../jobBack.jpg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createPost } from '../store/actions/postsActions';
import { Redirect } from 'react-router';
import { Multiselect } from 'multiselect-react-dropdown';
import { firestoreConnect } from 'react-redux-firebase';
import firebase from '../config/fbConfig';
import '../App.css';

class CreatePost extends React.Component {

    state = {
        company: '',
        location: '',
        contract: '',
        description: '',
        apply: '',
        title: '',
        role : '',
        classification : '',
        technologies: [],
        tools: [],
        responsabilities: '',
        qualifications: '',
        companyLogo: '',    
        dataTools : []
    }

    componentDidMount(){
        this.multiselectRef = React.createRef();
     
    }

    resetValues() {
        // By calling the belowe method will reset the selected values programatically
        this.multiselectRef.current.resetSelectedValues();
      }

    setTools = (technology) => {
        const ref = firebase.firestore().collection('tools');
        let setToolsArray = [];
        ref.where("relatedTech", "==", technology ).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //setToolsArray.push(doc.data());
                this.setState({
                    dataTools : [ ...this.state.dataTools, doc.data()]
                });
            })
        });


        if(setToolsArray){
            
        }

        
    }

    removeTools = (technology) =>{
        let updatedArray = this.state.dataTools.filter(item => item.relatedTech !== technology.id);
        this.setState({
            dataTools : updatedArray
        });
    }

    handleChange = (e) => {

        if(e.target.id === 'title'){
            this.setState({
                company: this.props.company.name,
                companyLogo: this.props.company.fileUrl
            })
        }
        if(e.target.value !== ' '){
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    }

    handleAddTechnologies = (selectedList, selectedItem) => { 
            this.setTools(selectedItem.id);
            this.setState({
                technologies: [...this.state.technologies, selectedItem]
            });     
      
    }

    handleAddTools = (selectedList,selectedItem) => {
        this.setState({
            tools: [...this.state.tools, selectedItem]
        });
        
       
    }

    handleRemoveTechnologies = (selectedList, removedItem) => {
       
        this.removeTools(removedItem);
        let updatedArray = this.state.technologies.filter(item => item.id !== removedItem.id);
        this.setState({
            technologies: updatedArray
        });
        this.multiselectRef.current.resetSelectedValues();
        
    }

    handleRemoveTools = (selectedList, removedItem) => {
        let updatedArray = this.state.tools.filter(item => item.id !== removedItem.id);
        this.setState({
            tools: updatedArray
        });
        
    }

   

    handleSubmit = (e) => {
        e.preventDefault();
        // We pass the post we want to create which is the state of the component after we submit the form
        this.props.createPost(this.state);
        this.props.history.push('/myPosts');
    }

    render() {
        const { auth, classifications, technologies, profile, company } = this.props;
        let dataTechnologies = [];

        if(!auth.uid) return <Redirect to='/signin' />

        // create technology options for multiselect
        // if(technologies.length !== 0){
        //     technologies.forEach(technology => {
        //        const object = {Technology: technology.language, id: technology.id}
        //        dataTechnologies.push(object);
        //     })
        // }

        const styles = {
            multiselectContainer: { 

                backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
                borderRadius: "0.25rem",
                text: "rgba(55, 65, 81, var(--tw-bg-opacity))",
                borderColor: "rgba(229, 231, 235, var(--tw-border-opacity))"

            },
            searchBox: {
                backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
                text: "rgba(55, 65, 81, var(--tw-bg-opacity))"
             },
             optionContainer: {
                backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
                text: "rgba(55, 65, 81, var(--tw-bg-opacity))",
                marginBottom: "0.9rem"
             }
        }

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
                                <div className="mt-2">
                                    <label className="block text-lg font-semibold  text-gray-00" for="name">Name</label>
                                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100" value={profile.firstName + " "+ profile.lastName} id="name"  type="text" placeholder="Your Name" disabled="true" aria-label="Name" />
                                </div>
                                <div className="">
                                    <label className="block text-lg font-semibold  text-sm text-gray-00" for="company">Company</label>
                                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100" id="company" value={company.name} type="text" required="" placeholder="Company" disabled="true" aria-label="Name" />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00' for="location">Location</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' onChange={this.handleChange} id="location" placeholder='Location' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00' for="contract">Contract</label>
                                    <select className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="contract" >
                                        <option hidden value="" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Contract Type</option>
                                        <option value="Full-Time" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Full-Time</option>
                                        <option value="Part-Time" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Part-Time</option>
                                        <option value="Other"className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Other</option>
                                    </select>
                                </div>
                                <div className='mt-7'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Description</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' cols="10" rows="20" onChange={this.handleChange} autoComplete="off" id="description" placeholder='Describe your post...' />
                                </div>
                                <div className='mt-7'>
                                    <label className='block text-lg font-semibold  text-gray-00'>How to apply?</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' cols="10" rows="20" onChange={this.handleChange} autoComplete="off" id="apply" placeholder='How to apply?' />
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button className="w-full mx-5 py-3 text-white font-light tracking-wider bg-red-600 rounded" type="submit">
                                        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 mr-1 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z" />
                                        </svg>
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Part of the Form on the right side */}
                        <div className="col-start-4 col-span-2">
                            <div className='mr-10'>
                                <div className="mt-2">
                                    <label className='block text-lg font-semibold  text-gray-00'>Job Title</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' onChange={this.handleChange} placeholder='Job Title' id="title" />
                                </div>
                                
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Role</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' onChange={this.handleChange} placeholder='Role' id="role" />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Classification</label>
                                    <select className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="classification" placeholder='Classification' >
                                        <option hidden value="" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Select category</option>
                                        {classifications.length === 0 ? (<option ></option>) : (classifications.map( classification =>(
                                            <option value={classification.id}>{classification.name}</option>
                                        )
                                        ))}
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Technologies</label>
                                    <Multiselect ref={this.multiselectRef} style={styles} options={technologies} placeholder="Choose technolgies" displayValue="language" onSelect={this.handleAddTechnologies} onRemove={this.handleRemoveTechnologies} />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Tools</label>
                                    <Multiselect ref={this.multiselectRef} style={styles} options={this.state.dataTools} placeholder="Choose one/more tools" displayValue="name" onSelect={this.handleAddTools} onRemove={this.handleAddTools} />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Responsibilities</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 hover:bg-gray-100 rounded' cols="10" rows="20"  autoComplete="off" id="responsabilities" onChange={this.handleChange} placeholder='Responsabilities' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Qualifications</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 hover:bg-gray-100 rounded' cols="10" rows="20"  autoComplete="off" id="qualifications" onChange={this.handleChange} placeholder='Qualifications' />
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
    const profile = state.firebase.profile;
    const allCompanies =  profile ? (state.firestore.ordered.companies) : ([]);
    const company = allCompanies ? (state.firestore.ordered.companies.filter(company => company.id === profile.company)) : ([]);

    return {
        auth: state.firebase.auth,
        classifications: state.firestore.ordered.classifications || state.classification.classifications,
        technologies: state.firestore.ordered.technologies || state.technology.technologies,
        profile: profile,
        company: company[0] || state.company.companies

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    };
};

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect(["classifications", "technologies", "companies"])
)(CreatePost);