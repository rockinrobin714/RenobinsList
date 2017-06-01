import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      location: '',
      zipCode: '',
      description: '',
      makeManufacturer: '',
      modelNameNumber: '',
      sizeDimensions: '',
      condition: '',
      numberOfGuests: 5
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    // Added the checkbox bit in case we add a checkbox later
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state[name])
  }

  onSubmit () {
    console.log('Submit!')
  }

  render() {
    return (
      <div>
        <form>
        <label>
          Title:
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Price:
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Location:
          <input
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Zip Code:
          <input
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Description:
          <textArea
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Make / Manufacturer:
          <input
            name="makeManufacturer"
            value={this.state.makeManufacturer}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Model name / Number:
          <input
            name="modelNameNumber"
            value={this.state.modelNameNumber}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Size / Dimensions:
          <input
            name="sizeDimensions"
            value={this.state.sizeDimensions}
            onChange={this.handleInputChange} />
        </label>

        <label
          name="condition"
          value={this.state.condition}
          onChange={this.handleInputChange}
        >
          Condition
          <select>
            <option value="">-</option>
            <option value="new">New</option>
            <option value="like new">Like new</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="average">Average</option>
            <option value="below average">Below average</option>
          </select>
        </label>
        </form>
        <button onClick={this.onSubmit.bind(this)}>Submit</button>
      </div>
      )
  }
}

export default Post;
