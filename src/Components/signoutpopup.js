import React from 'react';

class SignOutPop extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="popup-backdrop">
        <div className="popup">
          <p className="signout-popup-close" onClick={this.props.onClose}>X</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SignOutPop;