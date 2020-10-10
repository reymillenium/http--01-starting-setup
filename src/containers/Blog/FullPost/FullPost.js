import React, {Component} from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                // axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(response => {
                axios.get('/posts/' + this.props.id).then(response => {
                    const post = response.data;
                    const updatedPost = {
                        ...post,
                        author: 'Max'
                    }

                    this.setState({
                        loadedPost: updatedPost
                    });
                });
            }
        }
    }

    deletePostHandler = () => {
        // axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response); // Status 200 = it was successful
            });
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.author}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;