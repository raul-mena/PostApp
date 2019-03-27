import React, { Component } from 'react';
import Header from './components/shared/header';
import Form from './components/form/form'
import PostList from './components/post-list/postList'

class App extends Component {

  constructor(){
    super();

    this.state = {
      dates: []
    }

    this.createDate = this.createDate.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount(){
    const items = JSON.parse(localStorage.getItem('dates'));
    if(items) this.setState({dates: items});
  }

  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.dates))
  }

  removeCard(item){
    let newDates = this.state.dates.filter(card => card.id !== item.id)
    this.setState({dates: newDates});
  }

  createDate(data){
    this.setState({dates: [...this.state.dates, data]}, () => console.log('state', this.state));
  }

  addLike(item){
    let items = [...this.state.dates];
    let index = items.indexOf(item);
    item.likes++;
    items[index] = item;
    this.setState({dates: items});
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="row">
          <Form createDate={this.createDate}></Form>
          <PostList cards={this.state.dates} removeCard={this.removeCard} addLike={this.addLike}></PostList>
        </div>
      </div>
    );
  }
}

export default App;
