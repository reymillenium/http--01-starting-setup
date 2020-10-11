import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

// import FullPost from '../FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";

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
                            {/*<li><a href="/">Home Reloading</a></li>*/}
                            {/*<li><a href="/new-post">New Post Reloading</a></li>*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                            {/* Usage example of the Link */}
                            {/*<li><Link to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post 2</Link></li>*/}
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" render={()=><h1>Home</h1>}/>*/}
                {/*<Route path="/" exact={true} render={() => <Posts/>}/>*/}
                <Route path="/" exact={true} component={Posts}/>
                <Route path="/new-post" exact={true} component={NewPost}/>
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