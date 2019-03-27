import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {

  constructor(props){
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.addOneLike = this.addOneLike.bind(this);
  }

  removeItem(){
    this.props.removeCard(this.props.card);
  }

  addOneLike(){
    this.props.addLike(this.props.card)
  }

  render(){
    return(
        <div className="card mt-5" >
          <div className="card-body">
            <h5 className="card-title">{this.props.card.postName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.card.to}</h6>
            <p className="card-text">{this.props.card.comment}</p>
            <a onClick={this.removeItem} className="card-link btn btn-danger">Delete</a>
            <a onClick={this.addOneLike} className="card-link btn btn-primary ">like's ({this.props.card.likes})</a>
          </div>
        </div>
    )
  }
}

Post.propTypes = {
  card: PropTypes.object.isRequired,
  removeCard: PropTypes.func.isRequired
}

export default Post;
