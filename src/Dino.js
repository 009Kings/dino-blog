import React, {Component} from 'react'
// import the comment component
import Comment from './Comment.js'

class Dino extends Component {
  // Set an initial state in your component that contains content or body for this post
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
    // this.handleBodyEdit = this.handleBodyEdit.bind(this)
  }

  handleBodyEdit = () => {
    // open an alert takes a value.
    // Take the user inputed value into the alert box  
    let input = prompt("What is the new body of this article?")
    console.log(input)
    // use that return value to update the state of the body of your post.
    this.setState({body: input})
  }

  render(){
    let allComments = this.props.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
    })
    return (
      <>
        <h1>Check out my {this.props.title} blog!</h1>
        <p>Written by {this.props.author}</p>
        <p>{this.state.body}</p>
        <button onClick={this.handleBodyEdit}>Edit the body of this article</button>
        {allComments}
      </>
    )
  }
}

export default Dino;
