import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        console.log('NewPost.componentDidMount => props = ', this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        // axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        axios.post('/posts', data)
            .then(response => {
                console.log('NewPost.postDataHandler => response = ', response);  // Status 201
                // One ay of redirecting after performing a post of a Post component
                // this.setState({
                //     submitted: true
                // });
                // Another way of redirecting. Allows to go back on the browser.
                // this.props.history.push('/posts');
                // One more way of redirecting. It does not allows to go back on the browser.
                this.props.history.replace('/posts');
            });
    }

    render() {
        // Sets conditionally the Redirect component:
        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to={"/posts"}/>;
        // }

        return (
            <div className="NewPost">
                {/* Renders conditionally the Redirect component: */}
                {/*{redirect}*/}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;