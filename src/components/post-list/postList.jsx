import React, { Component } from 'react'
import Post from '../post/post';

class PostList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-sm-6">
        <h2 className="card-title text-center mb-5">{this.props.cards.length ? 'Cards' : ':(' }</h2>
        {
          this.props.cards.map(item => {
             return <Post key={item.id} card={item} removeCard={this.props.removeCard} addLike={this.props.addLike}></Post>
          })
        }
      </div>
    )
  }
}

export default PostList;
