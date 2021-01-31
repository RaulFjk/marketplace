import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { deleteCompany } from '../store/actions/companiesAction';

const CompanyPostComponent = ({deleteCompany, company, company: {
    description,
    headquarters,
    industry,
    name,
    size,
    website
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
        <div className="bg-white rounded-lg mt-9 w-80">
          <img
             src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/5c77d8a62417e4405611bb42_3k-color-1-scaled.jpg"
            className="h-48 rounded-md w-80"
            alt=""
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg -mt-4 w-80">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-lg">{name}</span>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-light">
                Size : {size}
              </div>
              <div className="text-2xl text-red-600 font-bold">
                $ 8.00
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return{
      deleteCompany: (company) => dispatch(deleteCompany(company))
  };
}

export default connect(null, mapDispatchToProps)(CompanyPostComponent);