import React from 'react';
import { Link } from 'react-router-dom'

class TrekLink extends React.Component {
  isActive(path) {
    if (path === '/' && window.location.pathname === '/') {
      return 'active'
    } else if (
      path !== '/' &&
      !this.props.epNum &&
      window.location.pathname.includes(path)
    ) {
      return 'active';
    } else if (path === window.location.pathname) {
      return 'active';
    } else {
      return null;
    }
  }

  getClassName() {
    let active = this.isActive(this.props.to);
    if (this.props.className && active) {
      return this.props.className + ' ' + active;
    } else if (this.props.className && !active) {
      return this.props.className;
    } else if (active) {
      return active;
    } else {
      return null;
    }
  }

  getEpNum() {
    if (this.props.epNum) {
      return (
        <span>{this.props.epNum}</span>
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <Link to={this.props.to} className={this.getClassName()}>
        {this.getEpNum()}
        {this.props.text}
      </Link>
    );
  }
}

export default TrekLink;