import React from 'react';
import Services from './Services';
import Jobs from './Jobs';
import Community from './Community';
import ForSale from './ForSale';
import Forums from './Forums';
import Gigs from './Gigs';
import Housing from './Housing';
import Resumes from './Resumes';
import NavBar from './NavBar';
import Personals from './Personals';
import SubmitPost from './SubmitPost';

class StatefulComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <SubmitPost />
        <Services />
        <Jobs />
        <Community />
        <ForSale />
        <Forums />
        <Gigs />
        <Housing />
        <Resumes />
        <Personals />
      </div>
    )
  }
}

export default React.createElement(StatefulComponent);