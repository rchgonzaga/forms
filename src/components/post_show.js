import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class PostShow extends Component {

    render() {
        return (
            <div>
                PostShow
            </div>
        )
    }
}

export default PostShow 

// function mapDispathToProps(dispath) {
//     return bindActionCreators({ fetchWeather }, dispath)
// }

// export default connect(null, mapDispathToProps)(PostShow)