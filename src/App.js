import React, {Component} from 'react';
import {Carousel, Menu} from 'element-react';
import 'element-theme-default';

import {getCarouselList, getMainInfo} from './services/';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselList: [],
      description: "",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu theme="dark" mode="horizontal" onSelect={this.onSelectNavItem.bind(this)}>
            <Menu.Item index="1">首页</Menu.Item>
            <Menu.SubMenu index="2" title="业务板块">
              <Menu.Item index="2-1">螺纹钢</Menu.Item>
              <Menu.Item index="2-2">线材</Menu.Item>
              <Menu.Item index="2-3">盘螺</Menu.Item>
              <Menu.Item index="2-4">型材</Menu.Item>
              <Menu.Item index="2-5">板材</Menu.Item>
              <Menu.Item index="2-6">其他</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3">企业文化</Menu.Item>
            <Menu.Item index="4">联系我们</Menu.Item>
          </Menu>
        </header>
        <main className="App-content">
          <div className="carousel-list">
            <Carousel type="flatcard" indicatorPosition="outside" height="300px">
              {
                this.state.carouselList.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img src={item.image} alt='steel-img' className="carousel-img"/>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
          <article className="company-des">
            <p>
              {this.state.description}
            </p>
          </article>
        </main>
        <footer>
          <p>中国区服务电话<span>0571-88668281</span><span>5372059980/15158046650</span></p>
        </footer>
      </div>
    );
  }

  componentDidMount(){
    getCarouselList().then(data => {
      this.setState({
        carouselList: [...data.dataList]
      })
    });
    getMainInfo().then(data => {
      this.setState({
        description: data.description,
      })
    })
  }

  onSelectNavItem(index, indexPath) {
    console.log(index, indexPath);
  }
}

export default App;
