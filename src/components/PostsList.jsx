import Post from './Post'
import classes from './PostsList.module.css';

function PostsList(){
    return (
        <ul className={classes.posts}>
            <Post author="Author #1" body="some body content #1"/>
            <Post author="Author #2" body="some body content #2"/>
        </ul>
    );
}

export default PostsList;