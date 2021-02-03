import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { deleteCompany } from '../store/actions/companiesAction';

const CompanyPostComponent = ({deleteCompany, company, profile, company: {
    description,
    headquarters,
    industry,
    name,
    size,
    website,
    fileUrl
}
}) => {

  const history = useHistory();

  const handleDeleteCompany= () => {

    deleteCompany(company);
    history.push('/partners');
    
}

    return(
        <div
        className="col-span-1 sm:col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div className="bg-white rounded-lg mt-9 w-80 shadow">
          <img
             src={fileUrl}
            className="h-48 rounded-md w-80"
            alt=""
          />
        </div>
        <div className="bg-gray-100 shadow-xl rounded-lg -mt-4 w-80">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-xl">{name}</span>
            <div className="flex-wrap mt-3">
              <div className="flex mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className=" text-gray-400 fill-current w-6 h-6 inline-block" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-gray-600 font-light">
                  Headquarters : {headquarters}
                </div>
                </div>
              <div className="text-sm font-bold  mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className=" text-gray-400 fill-current w-6 h-6 inline-block" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <a href={"https://" + website}>
                {website}
                </a>
              </div>
              <div className="flex mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className=" text-gray-400 fill-current w-6 h-6 inline-block" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
             </svg>
                <div className="text-sm text-gray-600 font-light">
                  Industry : {industry}
                </div>
                </div>
            </div>
            { profile.role === 'admin' &&
            <div className="flex items-center mt-4 justify-end">
            <NavLink className="inline-block p-3 text-center text-white transition bg-blue-800 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" to={'/editCompany/' + company.id}>
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                        l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                        c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                        L5.68,17.217z"/>
                    </svg>
                </NavLink>
                <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={handleDeleteCompany} >
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"/>
                    </svg>
                </button>
            </div> }
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
      profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      deleteCompany: (company) => dispatch(deleteCompany(company))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPostComponent);