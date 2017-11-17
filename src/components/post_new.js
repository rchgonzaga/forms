import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm } from 'redux-form'


class PostNew extends Component {

    render() {
        return (
            <div>
                 PostNew!
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostNew)
// function mapDispathToProps(dispath) {
//     // state that you want to make available for this component
//     return bindActionCreators({ XACTION }, dispath)
// }

// export default connect(null, mapDispathToProps)(XCLASS)