import React, {Component} from 'react'
// import the comment component
import Comment from './Comment.js'

class Dino extends Component {
  render(){
    let allComments = this.props.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
    })
    return (
      <>
        <h1>Check out my {this.props.title} blog!</h1>
        <p>Written by {this.props.author}</p>
        <p>{this.props.body}</p>
        {allComments}
      </>
    )
  }
}

export default Dino;
