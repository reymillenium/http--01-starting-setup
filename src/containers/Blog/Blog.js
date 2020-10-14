import React, {Component} from 'react';
import {Route, Link, NavLink, Switch} from "react-router-dom";

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";

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

                            {/*<li><Link to="/">Home</Link></li>*/}
                            {/*<li><Link to="/new-post">New Post</Link></li>*/}
                            {/* Another usage example of the Link */}
                            {/*<li><Link to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post 2</Link></li>*/}

                            {/*<li><NavLink to="/">Home</NavLink></li>*/}
                            {/*<li><NavLink to="/" exact={true}>Home</NavLink></li>*/}
                            {/* We can define custom active classes instead of the default 'active'*/}
                            {/*<li><NavLink to="/" exact={true} activeClassName="my-active">Home</NavLink></li>*/}
                            {/* We can even define our own inline styling for the active link */}
                            {/*<li><NavLink to="/"*/}
                            {/*             exact={true}*/}
                            {/*             activeClassName="my-active"*/}
                            {/*             activeStyle={{*/}
                            {/*                 color: '#fa923f',*/}
                            {/*                 textDecoration: 'underline'*/}
                            {/*             }}>Home</NavLink></li>*/}
                            {/* Leave it like this just for reference */}
                            <li><NavLink to="/posts" exact={true} activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                            {/* Another usage example of the NavLink */}
                            {/*<li><NavLink to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post 2</NavLink></li>*/}
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" render={()=><h1>Home</h1>}/>*/}
                {/*<Route path="/" exact={true} render={() => <Posts/>}/>*/}

                {/* Switch allows to render only one of the routes (the 1st that matches) and to
                 stop analyzing the rest of the routes  */}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    {/*<Route path="/:id" exact={true} component={FullPost}/>*/}
                </Switch>
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