import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';
import backG from '../try.jpg';
import JobBoardComponent from './JobBoardComponent';
import { filterPostByClassifications, filterPostByTechnologies, searchPosts } from '../store/actions/postsActions';
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

    handleFilterClassification = (classification) => {
        this.props.filterPostByClassifications(this.props.posts, this.props.filteredPosts, classification);
    }

    handleFilterTechnologies = (technologies) => {
        this.props.filterPostByTechnologies(this.props.posts, this.props.filteredPosts, technologies);
    }

    handleSearchPosts = (searchTerm) => {
        this.props.searchPosts(this.props.posts, this.props.filteredPosts, searchTerm)
    }

    render(){

       
        
        const{ posts, auth, location, filteredPosts, classificationFilter, technologiesFilter, searchFilter } = this.props; 
        const postsNumber = posts ? (posts.length) : ("0");
        if (!auth.uid){
            return <Redirect to ='/signin' />;
        }
        console.log(filteredPosts);

        if(filteredPosts){
            if(classificationFilter || technologiesFilter || searchFilter)
            return(
                <main>
                   <div className="sticky top-20 z-40 ">
                    <FilterBar filterClassification={this.handleFilterClassification} filterTechnologies={this.handleFilterTechnologies} searchPosts={this.handleSearchPosts} />
                    </div>
                    <div className='flex ml-10 z-30'>
                        <span className='text-3xl text-red-500 py-4 mr-1'>All</span>
                        <span className='text-3xl text-gray-700 py-4 '>Posts</span>
                    </div>
                    {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}
                    {filteredPosts.length === 0 ? (
                    <p>Looks like there is no post...</p>
                    ) : (
                    filteredPosts.map( post => (
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
                </main>
                ); 
        }
        return(
            <main>
                <div className="sticky top-20">
                    <FilterBar postsNumber={postsNumber} filterClassification={this.handleFilterClassification} filterTechnologies={this.handleFilterTechnologies} searchPosts={this.handleSearchPosts}  />
                </div>
                <div className='flex ml-10'>
                    <span className='text-3xl text-red-600 py-4 mr-1 font-bold'>All</span>
                    <span className='text-3xl text-blue-400 font-bold py-4 '>Posts</span>
                </div>
                {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}
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
            </main>
            );
        }
}

const mapStateToProps = (state) => {
//    console.log(state);
    return {
        posts: state.firestore.ordered.posts || state.post.posts,
        auth: state.firebase.auth,
        filteredPosts: state.post.filteredPosts,
        classificationFilter: state.post.classificationFilter,
        technologiesFilter: state.post.technologiesFilter,
        searchFilter: state.post.searchFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        filterPostByClassifications: (posts, filteredPosts, filter) => dispatch(filterPostByClassifications(posts, filteredPosts, filter)),
        filterPostByTechnologies: (posts, filteredPosts, filter) => dispatch(filterPostByTechnologies(posts, filteredPosts, filter)),
        searchPosts: (posts, filteredPosts, searchTerm) => dispatch(searchPosts(posts, filteredPosts, searchTerm))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(["posts"])
)(Home);

