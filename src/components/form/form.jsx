import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  initialState() {
    return {
        id: '',
        postName:'',
        hour:'',
        date:'',
        to:'',
        comment:'',
        likes:0
    };
  }

  sendData(e){
    e.preventDefault();
    this.setState({id: uuid()}, () => {
      this.props.createDate(this.state);
      this.setState(this.initialState)
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
        <div className="col-sm-6">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title text-center mb-5">New Post</h2>
                  <form onSubmit={this.sendData}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Post name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" name="postName" value={this.state.postName} onChange={this.handleChange} className="form-control" placeholder="Post name" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">To</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" name="to" value={this.state.to} onChange={this.handleChange} className="form-control"  placeholder="To" required />
                        </div>
                    </div>

                     <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} className="form-control" required/>
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hours</label>
                        <div className="col-sm-8 col-lg-4">
                            <input type="time" name="hour" value={this.state.hour} onChange={this.handleChange} className="form-control" required/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Comments</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea name="comment" value={this.state.comment} onChange={this.handleChange}  className="form-control" required></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Save</button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
    )
  }
}

Form.propTypes = {
  createDate : PropTypes.func.isRequired
}

export default Form
