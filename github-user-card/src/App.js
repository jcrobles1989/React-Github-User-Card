import React from 'react';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jcrobles1989').then(res => {
    console.log(res)
    this.setState({
      user: res.data
      })
    })

    axios.get('https://api.github.com/users/jcrobles1989/followers').then(res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>Github User</h1>
        </div>
        <div className='app-container'>
          <UserCard user={this.state.user} />
          {this.state.followers.map(item => {
            return <FollowerCard followers={item} key={item.id} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
