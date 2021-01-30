import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';
import JobBoardComponent from './JobBoardComponent';
import { filterPostByClassifications, filterPostByTechnologies } from '../store/actions/postsActions';
import FilterBar from './FilterBar';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {


    // const [jobs, setJobs] = useState([]);
    // const [filters, setFilters] = useState([]);

    // useEffect(() => setJobs(data), []);

    

    // filterFunc = ({ role, level, tools, languages }) => {
    //     if (filters.length === 0){
    //     return true;
    //     }
    //     const tags = [role, level];
        
    //     if (tools) {
    //     tags.push(...tools);
    //     }

    //     if (languages) {
    //     tags.push(...languages);
    //     }
    // // macar un tag sa fie in anunt
    //     // return tags.some((tag) => filters.includes(tag));
    //     // returneaza doar cele care au toate tagurile din filtru
    //     return filters.every((filter) => tags.includes(filter));
    // };

    handleTagClick = (tag) => {
        // // avoid re-adding the tag
        // if(filters.includes(tag)) return;
    }
        
    //     setFilters([...filters, tag]);
    // }

    // handleFilterClick = (passedFilter) => {
    //     setFilters(filters.filter((f) => f !== passedFilter ));

    // }

    // clearFilters = () => {
    //     setFilters([]);
    // }

    // filteredJobs = jobs.filter(filterFunc);

    handleFilterClassification = (filter) => {
        console.log(filter);
    }

    handleFilterTechnologies = (technologies) => {
        console.log(technologies);
    }

    render(){
        
        const{ posts, auth, location } = this.props;
        if (!auth.uid){
            return <Redirect to ='/signin' />;
        }

        return(
            <div>
                <div >
                    <FilterBar filterClassification={this.handleFilterClassification} filterTechnologies={this.handleFilterTechnologies} />
                </div>
                <div className='flex ml-10'>
                    <span className='text-3xl text-red-500 py-4 mr-1'>All</span>
                    <span className='text-3xl text-gray-700 py-4 '>Posts</span>
                </div>
                {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}

            {/* { filters.length > 0 && (
                <div className= 'flex bg-white shadow-md my-16 mx-10 p-6 rounded '>
                    {filters.length > 0 && filters.map(
                        (filter) => (
                        <span
                        className='cursor-pointer mr-4 mb-4
                        p-2 rounded text-green-500
                        bg-green-100 font-bold sm:mb-0'
                        onClick={() => handleFilterClick(filter)}>
                            ×{filter}
                            </span>
                            ))}
                            <button onClick={clearFilters} className='font-bold text-gray-700 ml-auto'>Clear</button>
                </div>
                )} */}
                {posts.length === 0 ? (
                <p>Jobs are loading...</p>
                ) : (
                posts.map( post => (
                    <Link to={'/post/' + post.id} key={post.id}>
                        <JobBoardComponent
                        post={post}
                        id={post.id}
                        edit="false"
                        handleTagClick={this.handleTagClick} />
                    </Link>
                ))
                )
            }
            </div>
            );
        }
}

const mapStateToProps = (state) => {
//    console.log(state);
    return {
        posts: state.firestore.ordered.posts || state.post.posts,
        auth: state.firebase.auth
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect(["posts"])
)(Home);

