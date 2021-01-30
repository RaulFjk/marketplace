import React from 'react';
import backG from '../try.jpg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select';


class FilterBar extends React.Component {




render() {

   const { classifications, technologies } = this.props;

   const technolgoiesOptions = technologies.length !== 0 ? (technologies.map((item) => {
    return {
      value: item.id,
      label: item.language
    };})) : ([]);

    const classificationsOptions = classifications.lenth !== 0 ? (classifications.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    }) ) : ([]);

    return (
        <div classname='bg-cover bg-center ...' style= {{ backgroundImage: `url('${backG}')` }}>
        <div className='py-44 bg-blue-600 bg-transparent bg-opacity-60' >
            {/* Div for text upon filter input fields */}
            <div className='flex justify-center mr-72 mb-10'>
                <span className='mr-1 text-4xl text-red-700 mb-1'>3,000+</span>
                <span className='text-4xl text-white mb-1'>Browse Jobs, Projects, Conferences</span>
            </div>
            <div className='flex justify-center mr-2 '>
                <div className='px-3 bg-indigo-300 bg-transparent bg-opacity-40 py-5'>
                    <input className='input border border-gray-400 appearance-none rounded w-80 px-3 py-3 pt-2 pb-2
                     focus focus:border-indigo-600 focus:outline-none
                      active:outline-none active:border-indigo-600'
                      placeholder='Search...'/>
                </div>
                <div  className='px-2 bg-indigo-300 bg-transparent bg-opacity-40 py-5'>
                    <Select className='appearance-none rounded w-80 px-3 py-1 pb-2
                        focus focus:border-indigo-600 focus:outline-none
                        active:outline-none active:border-indigo-600' 
                                options={classificationsOptions}
                                onChange={this.props.filterClassification}
                                isSearchable
                                isClearable
                                placeholder="Classifications"
                        />
                </div >
                <div  className='px-2 bg-indigo-300 bg-transparent bg-opacity-40 py-5'>
                    <Select className='appearance-none rounded w-80 px-3 py-1 pb-2
                     focus focus:border-indigo-600 focus:outline-none
                      active:outline-none active:border-indigo-600' 
                            options={technolgoiesOptions}
                            onChange={this.props.filterTechnologies}
                            isSearchable
                            isClearable
                            placeholder="Technologies"
                    />
                </div>
                <div className="py-3">
                    <button className="bg-blue-800 text-white my-1  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Search</button>
                </div>
            </div>
        </div>
        </div>
        
    );
}

}

const mapStateToProps = (state) => {
    return {
        classifications: state.firestore.ordered.classifications || state.classification.classifications,
        technologies: state.firestore.ordered.technologies || state.technology.technologies
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["classifications", "technologies"])
)(FilterBar);