import React from 'react';
import backG from '../try.jpg';
import logo from '../eyecam-co.svg';
import moment from 'moment';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import firebase from '../config/fbConfig';
import { compose } from 'redux';
import { connect } from 'react-redux'; 
import { firestoreConnect } from 'react-redux-firebase';
import { deletePost } from '../store/actions/postsActions';

const JobBoardComponent = ({ companyData, edit, deletePost, post, post: {
    company,
    featured,
    title,
    role,
    postedAt,
    contract,
    location,
    companyLogo
},
id,
handleTagClick
 }) => {
    const tags = [role];

    
    const techs = post.technologies;
    const technologies = techs.map(function (technology) { return technology.language; }); 

    const toolsA = post.tools;
    const tools = toolsA.map(function (tool) { return tool.name; });

    if (tools) {
        tags.push(...tools);
    }

    if (technologies) {
        tags.push(...technologies);
    }
    const history = useHistory();

    const handleDeletePost = () => {
        const db = firebase.firestore();//
        //db.collection('posts').doc(post.id).delete();
        deletePost(post);
        history.push('/myPosts');
        
    }

    const isNew = true;

    const today = new Date().getDay();
    const postedAtDate= moment(postedAt.toDate()).day();
   
  
    return ( 
        // If job is featured then it should have a blue margin on the left border side
        <div className={`flex flex-col bg-white shadow-xl border-gray-200 my-16 mx-10 p-6 rounded hover:bg-gray-100
        ${featured && 'border-l-4 border-blue-500 border-solid'} sm:flex-row sm:my-4`} >
            <div>
                {/* sm: -> is a breakpoint which says that mt should pe 0 when desktop version is encountered */}
                <img className="-mt-16 mb-4 w-20 h-20 s sm:h-24 sm:w-24 sm:my-0" src={companyLogo} alt={companyLogo}/>
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h3 className='font-bold text-blue-500'>
                    {company}
                    {/* if isNew and featured property exists than create a little span for each one of them */}
                    {today === postedAtDate && (<span className='text-blue-100 bg-blue-500 font-bold 
                 m-2  rounded-full py-1 px-2'>New</span>)}
                    {featured && (<span className='text-white bg-gray-800 font-bold 
                py-1 px-2 rounded-full'>Featured</span>)}
                </h3>
                <h2 className='font-bold text-xl my-2 '>{title}</h2>
                <p className='text-gray-700'>
                   {moment(postedAt.toDate()).calendar()} · {contract} · {location}
                </p>
            </div>
            <div className='flex flex-wrap 
            items-center mt-4 mx-4 pt-4 border-t 
            border-gray-300 border-solid
            sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
                { tags ? tags.map((tag)=> 
                <span
                onClick={() => handleTagClick(tag)}
                 className='cursor-pointer text-blue-100
                  bg-blue-500 font-bold
                   mr-2 mb-4
                p-2 rounded sm:mb-0'>{tag}</span>) : '' }
            </div>
            {edit === "true" && 
            <div className='flex flex-wrap 
                            items-center mt-4 mx-4 pt-4 border-t 
                            border-gray-300 border-solid
                            sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'>
                <NavLink className="inline-block p-3 text-center text-white transition bg-blue-800 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" to={'/editPost/' + post.id}>
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                        l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                        c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                        L5.68,17.217z"/>
                    </svg>
                </NavLink>
                <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={handleDeletePost}>
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"/>
                    </svg>
                </button>
            </div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    const profile = state.firebase.profile;
    const companyId = profile.company;
    return {
        profile: profile,
        companyId: companyId,
        companyData: state.firebase.ordered.companies || state.company.companies
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (post) => dispatch(deletePost(post))
    };
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
firestoreConnect( (props) => [
    {
        collection: 'companies',
        doc: props.companyId,
    }, 
 ])
)(JobBoardComponent);