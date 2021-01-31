import React from 'react';
import backG from '../try.jpg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select';


class FilterBar extends React.Component {

    state = {
        searchTerm : ''
    }

    handleChange = (e) => {

            this.setState({
                searchTerm: e.target.value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchPosts(this.state.searchTerm);
    }


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
        <div classname='bg-cover  bg-center ... ' style= {{ backgroundImage: `url('${backG}')` }}>
        <div className='py-16 bg-blue-600 bg-transparent bg-opacity-60' >
            {/* Div for text upon filter input fields */}
        <div className='flex justify-center mr-72 mb-10'>
            <span className='mr-1 text-4xl text-red-700 mb-1'>{this.props.postsNumber}+</span>
            <span className='text-4xl text-white mb-1'>Browse Jobs, Projects, Conferences</span>
        </div>
            <div className='flex justify-center mr-2 '>
                <div className='px-3 bg-indigo-300 bg-transparent bg-opacity-40 py-5'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex border border-gray-400 bg-white ">
                            <input className='input appearance-none rounded w-80 px-3 py-3 pt-2 pb-2
                            focus focus:border-indigo-600 focus:outline-none
                            active:outline-none active:border-indigo-600'
                            placeholder='Search...' onChange={this.handleChange}/>
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="gray"
                                    className="w-5 mr-2  text-gray-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                      </form>
                </div>
                <div  className='px-2 bg-indigo-300 bg-transparent bg-opacity-40  py-5'>
                    <Select
                    className='appearance-none rounded w-80 px-3 py-1 pb-2
                        focus focus:border-indigo-600 focus:outline-none
                        active:outline-none active:border-indigo-600 ' 
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
                      active:outline-none active:border-indigo-600 z-30 ' 
                            options={technolgoiesOptions}
                            onChange={this.props.filterTechnologies}
                            isSearchable
                            isClearable
                            placeholder="Technologies"
                    />
                </div>
                <div className="py-6">
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