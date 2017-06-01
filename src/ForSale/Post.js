import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Price: {this.props.price}</div>
        <div>Location: {this.props.location}</div>
        <div>Zip Code: {this.props.zipCode}</div>
        <div>Description: {this.props.description}</div>
        <div>Make / Manufacturer: {this.props.makeManufacturer}</div>
        <div>Model name / Number: {this.props.modelNameNumber}</div>
        <div>Size / Dimensions: {this.props.sizeDimensions}</div>
        <div>Condition: {this.props.condition}</div>
    </div>
    )
  }
}

export default Post;