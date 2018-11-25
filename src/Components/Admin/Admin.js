import React, {Component} from 'react';
import {Carousel, Menu, Layout} from 'element-react';
import 'element-theme-default';

import {getCarouselList, getPriceInfo} from '../../services/index';
import './Admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Admin
      </div>
    );
  }
}

export default Admin;
