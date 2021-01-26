import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import JobBoardComponent from './JobBoardComponent';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class MyPosts extends React.Component{

    render() {

        const{ posts, auth } = this.props;
        if (!auth.uid){
            return <Redirect to ='/signin' />;
        }

        return(
            <div>
                <div className='flex ml-10'>
                    <span className='text-3xl text-red-500 py-4 mr-1'>My</span>
                    <span className='text-3xl text-gray-700 py-4 '>Posts</span>
                </div>
                {posts.length === 0 ? (
                    <p>Jobs are loading...</p>
                    ) : (
                    posts.map( post => (
                     //   <Link to={'/post/' + post.id} key={post.id}>
                            <JobBoardComponent
                            post={post}
                            id={post.id}
                            edit="true"
                            handleTagClick={this.handleTagClick} />
                      //  </Link>
                    ))
                    )
                }
            </div> 
        );
    }

}

const mapStateToProps = (state) => {
        return {
            posts: state.firestore.ordered.posts || state.post.posts,
            auth: state.firebase.auth
        };
    };
    export default compose(
        connect(mapStateToProps),
        firestoreConnect(["posts"])
    )(MyPosts);