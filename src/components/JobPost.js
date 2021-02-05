import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import background from '../jobBack.jpg';
import jobLogo from '../insure.svg'


const JobPost = (props) => {

    const { post, auth, classification } = props;

    if(!auth.uid){
        return <Redirect to='/signin' />;
    }else if(post && classification) {
    const { company, title, location, contract, apply, postedAt, role, cassification, technologies, tools, companyLogo, description, responsabilities } = post[0];
    const {name} = classification[0];
    return (
            <div>
                {/* Job title and description div */}
                <div className='bg-cover bg-center' style= {{ backgroundImage: `url('${background}')` }}>
                    <div className='bg-blue-600 bg-transparent bg-opacity-30'>
                        <div className='ml-44 py-20' >
                            <span className='text-4xl fond-bold'>{title}</span>
                        </div>
                    </div>
                </div>
                {/* Grid layout under job title, divided in 3 cols where text ocupies 2 cols and 1 col is for key information div on the right side */}
                <div className='grid grid-cols-3 gap-4'>
                    <div class='col-span-2 ... shadow-2xl border-2 ml-44 mb-4 mt-16 rounded-lg'>
                        <div className='px-6 py-8'>
                        <h1 className='text-2xl py-6 font-semibold'>Description</h1>
                        <p>{description}</p>
                        <h1 className='text-2xl py-6 font-semibold'>Responsabilities</h1>
                        <p>{responsabilities}</p>
                        <h1 className='text-2xl py-6 font-semibold'>How to apply?</h1>
                        <p>{apply}</p>
                        </div>
                    </div>
                    {/* Job Overview card on the right side with Job Description tags */}
                    <div className='shadow-xl ml-10 mr-20 rounded-lg border-2 h-auto mb-4 mt-16'>
                        <div className='border-b-2 flex justify-center' >
                            <div className='py-4'>
                                <span className='text-xl font-semibold'>Post Overview</span>
                            </div>
                        </div>
                        {/*Image div with Company Logo  */}
                        <div className='border-b-2 py-4'>
                            <div className="flex justify-center">
                                <img className="h-24 w-24 object-contain rounded-full border border-1" src={companyLogo}/>
                            </div>
                            <div className="flex justify-center mt-1">
                                <span className='font-semibold px-2'> {company} </span>
                            </div>
                        </div>
                        <div className='ml-6'>
                            {/* Posted on heading with icon */}
                            <div className='my-6'>
                                <div className='flex'>
                                <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5">
						        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
					            </svg>
                               <h1 className='ml-2 font-semibold'>Posted on</h1>
                                </div>
                                <span className='ml-7 text-gray-400'> {moment(postedAt.toDate()).calendar()}</span>
                            </div>
                            {/* Location div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                    <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <h1 className='ml-2 font-semibold'>Location</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>{location}</span>
                            </div>
                            {/* Title div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    <h1 className='ml-2 font-semibold'>Title</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>{title}</span>
                            </div>
                            {/* Category div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                    <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0
                                     01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <h1 className='ml-2 font-semibold'>Role</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>{role}</span>
                            </div>
                            <div className='my-6'>
                                <div className='flex'>
                                    <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5">               
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                    <h1 className='ml-2 font-semibold'>Classification</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>{name}</span>
                            </div>
                            <div className='mt-44 mb-4'>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        ); 
    } else {
            return (
                <div className="container center">
                    Posts are loading...
                </div>
            );
        }
    
}

const mapStateToProps = (state, ownProps) => {

    const pathname = ownProps.location.pathname;
    const splitPath = pathname.split('/');
    const postId = splitPath[2];

    const classification = state.firestore.ordered.posts ? (state.firestore.ordered.posts) : ([]);
    var classificationId; 
    if(classification.length !== 0){
        classificationId = classification[0].classification;
    }else{
        classificationId = '';
    }
    return {
        postId : postId,
        post: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        classificationId: classificationId,
        classification: state.firestore.ordered.classifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {
            collection: 'posts',
            doc: props.postId
        },
        {
            collection: 'classifications',
            doc: props.classificationId  
          }
    
    ])
)(JobPost);