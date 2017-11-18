import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions'


class PostShow extends Component {

    componentDidMount(){
        const {id} = this.props.match.params
        console.log(id)
        this.props.fetchPost(id)
    }

    render() {

        const {post} = this.props

        if(!post){
            return <div>loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow)

// function mapDispathToProps(dispath) {
//     return bindActionCreators({ fetchWeather }, dispath)
// }

// export default connect(null, mapDispathToProps)(PostShow)