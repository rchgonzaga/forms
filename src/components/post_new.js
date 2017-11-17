import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createPost } from '../actions'


class PostNew extends Component {

    renderField(field){
        const {meta: {touched, error}} = field
        const className = `form-group ${touched && error ? 'has-danger': ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}/>
                    
                    <div className="text-help">
                        {touched ? error : ''}
                    </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values)
    }

    render() {
        
        const {handleSubmit} = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField} />
                <Field label="Categories" name="categories" component={this.renderField} />
                <Field label="Post content" name="content" component={this.renderField} />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!"
    }

    if(!values.categories){
        errors.categories = "Enter some categories"
    }

    if(!values.content){
        errors.content = "Enter some content please"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{createPost})(PostNew)
)