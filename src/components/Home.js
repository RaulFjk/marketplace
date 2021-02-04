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
import Pagination from './Pagination';

class Home extends React.Component {

    state = {
        currentPage: 1,
        postsPerPage: 6,
        showFilterBar: true
    }
    
    paginate = (pageNumber) =>{
        this.setState({
            currentPage: pageNumber
        });
    }

    handleTagClick = (tag) => {
        // // avoid re-adding the tag
        // if(filters.includes(tag)) return;
    }
        
    handleFilterBar = (e) => {
        if(this.state.showFilterBar === true){
            this.setState({
                showFilterBar: false
            });
        }else{
            this.setState({
                showFilterBar: true
            });
        }
    }
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

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = posts ? (posts.slice(indexOfFirstPost, indexOfLastPost)) : [];

        const postsNumber = posts ? (posts.length) : ("0");
        if (!auth.uid){
            return <Redirect to ='/signin' />;
        }
       

        if(filteredPosts){
            if(classificationFilter || technologiesFilter || searchFilter)
            return(
                <main>
                   <div className="">
                    <FilterBar filterClassification={this.handleFilterClassification} filterTechnologies={this.handleFilterTechnologies} searchPosts={this.handleSearchPosts} />
                    </div>
                    <div className='flex ml-10 z-30'>
                        <span className='text-3xl text-red-600 py-4 mr-1 font-bold'>Found</span>
                        <span className='text-3xl text-blue-400 font-bold py-4 '>Posts</span>
                    </div>
                    {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}
                    {filteredPosts.length === 0 ? (
                    <p className="ml-5">Upsss, it looks like there is no such post...</p>
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
                {this.state.showFilterBar === true &&
                <div className="">
                    <FilterBar postsNumber={postsNumber} filterClassification={this.handleFilterClassification} filterTechnologies={this.handleFilterTechnologies} searchPosts={this.handleSearchPosts}  />
                </div> }
                <div className='flex ml-10'>
                    <span className='text-3xl text-red-600 py-4 mr-1 font-bold'>All</span>
                    <span className='text-3xl text-blue-400 font-bold py-4 '>Posts</span>
                </div>
                {/* Tags Filter above the jobs ---------->>>> must be adapted <<<<<<<<<<<<<<<<<------------------------- */}
                {currentPosts.length === 0 ? (
                <p className="ml-5">Posts are loading...</p>
                ) : (
                    currentPosts.map( post => (
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
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={posts.length} paginate={this.paginate} />
            </main>
            );
        }
}

const mapStateToProps = (state) => {

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
    firestoreConnect([
     { collection: "posts", orderBy: ['postedAt', 'desc']}
    ])
)(Home);

