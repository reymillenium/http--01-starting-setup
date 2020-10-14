import React, {Component} from "react";
import axios from "../../../axios";
// import {Link} from "react-router-dom";
// import {Route, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";


class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        // error: false
    }

    componentDidMount() {
        console.log('Posts.componentDidMount => props = ', this.props);
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            // console.log(response);
            this.setState({
                posts: updatedPosts
            });
        }).catch(error => {
            console.log('FullPost.componentDidMount.get.then.catch => error = ', error);
            // this.setState({
            //     error: true
            // });
        });
    }

    postSelectedHandler = (id) => {
        // this.setState({
        //     selectedPostId: id
        // });

        // Navigating Programmatically:
        // this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push('/posts/' + id);
        this.props.history.push(this.props.match.url + '/' + id);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something wen wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        key={post.id}
                        content={post.body}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact={true} component={FullPost}/>
            </div>
        );
    }

}

export default Posts;