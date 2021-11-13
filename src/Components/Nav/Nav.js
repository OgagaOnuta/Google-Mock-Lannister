import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li>
            <a href="https://mail.google.com/mail/&ogbl">Gmail</a>
          </li>
          <li>
            <a href="https://www.google.com.ng/imghp?hl=en&ogbl">Images</a>
          </li>
          <li>
            <a href="https://www.google.com.ng/intl/en-GB/about/products?tab=rh">
              <img src="assets/images/google-show-apps.png" alt="show google apps" width="15px" height="15px" />
            </a>
          </li>
          <li>
            <a href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ">
              <button>Sign in</button>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;