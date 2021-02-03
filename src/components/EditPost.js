import React from 'react';
import background from '../jobBack.jpg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updatePost } from '../store/actions/postsActions';
import { Redirect } from 'react-router';
import { Multiselect } from 'multiselect-react-dropdown';
import { firestoreConnect } from 'react-redux-firebase';
import firebase from '../config/fbConfig';
import '../App.css';

class EditPost extends React.Component {

    state = {
        company: '',
        location: '',
        contract: '',
        description: '',
        apply: '',
        title: '',
        role : '',
        qualifications:'',
        classification : '',
        technologies: [],
        tools: [],
        responsabilities: '',    
        dataTools : []
    }

    componentDidMount(){
        this.multiselectRef = React.createRef();
   

        const pathname = this.props.location.pathname;
        const splitPath = pathname.split('/');
        const postId = splitPath[2];

        const ref = firebase.firestore();
        const postRef = ref.collection('posts').doc(postId).get().then( (doc) => {
            

                if(doc.exists){
                const post = doc.data();

                this.setState({
                    company: post.company,
                    location: post.location,
                    contract: post.contract,
                    description: post.description,
                    apply: post.apply,
                    title: post.title,
                    role : post.role,
                    classification : post.classification,
                    technologies: post.technologies,
                    tools: post.tools,
                    responsabilities: post.responsabilities,
                    qualifications: post.qualifications
                }); }
        

        }); 
     
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
        const pathname = this.props.location.pathname;
        const splitPath = pathname.split('/');
        const postId = splitPath[2];
        // We pass the post we want to create which is the state of the component after we submit the form
        this.props.updatePost(this.state, postId);
        this.props.history.push('/myPosts');
    }

    render() {
        const { auth, post, profile, classifications } = this.props;
        const allTechnologies = this.props.technologies;
        const { company, location, contract, description, apply, title, role, classification, technologies, tools, responsabilities, qualifications } = post.length !== 0 ? post[0]: {};
        let dataTechnologies = [];

        if(!auth.uid) return <Redirect to='/signin' />

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
                            <span className='text-4xl fond-bold'>Edit Post</span>
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
                                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100" defaultValue={profile.firstName + " "+ profile.lastName} id="name"  type="text" placeholder="Your Name" disabled="true" aria-label="Name" />
                                </div>
                                <div className="">
                                    <label className="block text-lg font-semibold  text-sm text-gray-00" for="company">Company</label>
                                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100" id="company" defaultValue={company} type="text" required="" placeholder="Company" disabled="true" aria-label="Name" />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00' for="location">Location</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' defaultValue={this.state.location}  onChange={this.handleChange} id="location" placeholder='Location' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00' for="contract">Contract</label>
                                    <select className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded' defaultValue={this.state.contract} onChange={this.handleChange} id="contract" >
                                        <option hidden value="" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Contract Type</option>
                                        <option value="Full-Time" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Full-Time</option>
                                        <option value="Part-Time" className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Part-Time</option>
                                        <option value="Other"className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Other</option>
                                    </select>
                                </div>
                                <div className='mt-7'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Description</label>
                                    <textarea defaultValue={this.state.description} className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' cols="10" rows="20" onChange={this.handleChange} autoComplete="off" id="description" placeholder='Describe your post...' />
                                </div>
                                <div className='mt-7'>
                                    <label className='block text-lg font-semibold  text-gray-00'>How to apply?</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' defaultValue={this.state.apply} cols="10" rows="20" onChange={this.handleChange} autoComplete="off" id="apply" placeholder='How to apply?' />
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button className="w-full mx-5 py-3 text-white font-light tracking-wider bg-red-600 rounded" type="submit">
                                        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 mr-3 inline-block">
                                        <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                        l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                        c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                        L5.68,17.217z"/>
                                        </svg>
                                        Edit Post
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Part of the Form on the right side */}
                        <div className="col-start-4 col-span-2">
                            <div className='mr-10'>
                                <div className="mt-2">
                                    <label className='block text-lg font-semibold  text-gray-00'>Job Title</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' defaultValue={this.state.title} onChange={this.handleChange} placeholder='Job Title' id="title" />
                                </div>
                                
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Role</label>
                                    <input className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-100' defaultValue={this.state.role} onChange={this.handleChange} placeholder='Role' id="role" />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Classification</label>
                                    <select className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded' onChange={this.handleChange} id="classification" placeholder='Classification' >
                                        <option hidden value={classification} className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'>Select category</option>
                                        {classifications.length === 0 ? (<option ></option>) : (classifications.map( classification =>(
                                            <option value={classification.id}>{classification.name}</option>
                                        )
                                        ))}
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Technologies</label>
                                    <Multiselect ref={this.multiselectRef} style={styles} options={allTechnologies} selectedValues={technologies} placeholder="Choose technolgies" displayValue="language" onSelect={this.handleAddTechnologies} onRemove={this.handleRemoveTechnologies} />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Tools</label>
                                    <Multiselect ref={this.multiselectRef} style={styles} options={this.state.dataTools} selectedValues={tools} placeholder="Choose one/more tools" displayValue="name" onSelect={this.handleAddTools} onRemove={this.handleAddTools} />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Responsabilites</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 hover:bg-gray-100 rounded' defaultValue={this.state.responsabilities} cols="10" rows="20"  autoComplete="off" id="responsabilities" onChange={this.handleChange} placeholder='Responsabilities' />
                                </div>
                                <div className='mt-2'>
                                    <label className='block text-lg font-semibold  text-gray-00'>Qualifications</label>
                                    <textarea className='w-full h-44 px-2 py-1 text-gray-700 bg-gray-200 hover:bg-gray-100 rounded' defaultValue={this.state.qualifications} cols="10" rows="20"  autoComplete="off" id="qualifications" onChange={this.handleChange} placeholder='Qualifications' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );

    }

}

const mapStateToProps = (state, ownProps) => {
    const profile = state.firebase.profile;
  //  const allCompanies =  profile ? (state.firestore.ordered.companies) : ([]);
    //const company = allCompanies ? (state.firestore.ordered.companies.filter(company => company.id === profile.company)) : ([]);

    const pathname = ownProps.location.pathname;
    const splitPath = pathname.split('/');
    const postId = splitPath[2];

    return {
        postId: postId,
        auth: state.firebase.auth,
        classifications: state.firestore.ordered.classifications || state.classification.classifications,
        technologies: state.firestore.ordered.technologies || state.technology.technologies,
        profile: profile,
        post: state.firestore.ordered.posts || []
        //company: company[0] || state.company.companies

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (post, postId) => dispatch(updatePost(post, postId))
    };
};

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect((props) => [
     {
         collection: 'posts',
         doc: props.postId,
     },
    {collection: "classifications"}, 
    {collection: "technologies"}, 
     //{collection: "companies"}
 ])
)(EditPost);