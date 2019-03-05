import React, { Component } from 'react';

class Item extends Component {
  state = {
    count: this.props.value,
    imageUrl: this.props.image
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  handleReduction = () => {
    this.setState({count: this.state.count - 1});
  }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <div>
        <img style={{padding: 10}} src={this.state.imageUrl} alt="" />
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className={"btn btn-secondary btn-sm m-2"}> + </button>
        <button onClick={this.handleReduction} className={"btn btn-secondary btn-sm m-2"}> - </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Item;
