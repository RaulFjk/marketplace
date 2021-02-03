import React from 'react';
import CompanyPostComponent from './CompanyPostComponent';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const Partners = (props) => {
    const{ companies, auth, profile } = props; 

    if (!auth.uid){
        return <Redirect to ='/signin' />;
    }

    return(

    <div className="grid grid-cols-4 gap-x-12 mx-3">
                {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}
                {companies.length === 0 ? (
                <p>Jobs are loading...</p>
                ) : (
                    companies.map( company => (
                    // <Link to={'/company/' + company.id} key={company.id}>
                        <CompanyPostComponent
                        company={company}
                        id={company.id}
                        edit="false"/>
                    // </Link>
                ))
                )
            }
        { profile.role === 'admin' &&
        <div className="col-span-1 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <NavLink className="bg-white mt-9 focus:outline-none" to='/addCompany'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 bg-white" viewBox="0 0 24 24" stroke="gray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </NavLink>
        </div> }
    </div> 
    
    
    );


}

const mapStateToProps = (state) => {

    return {
        companies: state.firestore.ordered.companies || [],
        auth: state.firebase.auth,
        profile: state.firebase.profile

    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect(['companies'])
)(Partners);