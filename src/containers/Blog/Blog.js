import React, {Component} from 'react';
// import axios from '../../axios';
import {Route} from "react-router-dom";


// import Post from '../../components/Post/Post';
// import FullPost from '../FullPost/FullPost';
// import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" render={()=><h1>Home</h1>}/>*/}
                {/*<Route path="/" exact={true} render={() => <Posts/>}/>*/}
                <Route path="/" exact={true} component={Posts}/>
                {/*<Posts/>*/}

                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId}/>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <NewPost/>*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;