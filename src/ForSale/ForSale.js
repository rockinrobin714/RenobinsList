import React from 'react';
import SubmitPost from './SubmitPost';
import Post from './Post';

class ForSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data = '';
    }
  }
  render() {
    return <div>
      <SubmitPost />
    	<h1>This is ForSale</h1>
      <Post />
    </div>
  }
}

export default ForSale;