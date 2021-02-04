import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import JobBoardComponent from './JobBoardComponent';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import  Pagination  from './Pagination';

class MyPosts extends React.Component{

    state = {
        currentPage: 1,
        postsPerPage: 5
    }
    
    paginate = (pageNumber) =>{
        this.setState({
            currentPage: pageNumber
        });
    }

    render() {

        const{ posts, auth } = this.props;
        if (!auth.uid){
            return <Redirect to ='/signin' />;
        }

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = posts ? (posts.slice(indexOfFirstPost, indexOfLastPost)) : [];

        return(
            <div>
                <div className='flex ml-10'>
                    <span className='text-3xl text-red-600 py-4 mr-1 font-bold'>My</span>
                    <span className='text-3xl text-blue-400 font-bold py-4 '>Posts</span>
                </div>
                {currentPosts.length === 0 ? (
                    <p className="mx-4">It looks like you didn't posy anything yet...</p>
                    ) : (
                    currentPosts.map( post => (
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
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={posts.length} paginate={this.paginate} />
            </div> 
        );
    }

}

const mapStateToProps = (state) => {

        const userId = state.firebase.auth.uid ? (state.firebase.auth.uid):  ('');
        return {
            posts: state.firestore.ordered.posts || state.post.posts,
            auth: state.firebase.auth,
            userId: userId

        };
    };
    export default compose(
        connect(mapStateToProps),
        firestoreConnect( (props) => [
           {collection: 'posts',
            where: [[ 'userId', '==', props.userId ]] 
        }
        ])
    )(MyPosts);