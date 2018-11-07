import React, {Component} from 'react';
import {Carousel, Menu, Layout} from 'element-react';
import 'element-theme-default';

import {getCarouselList, getMainInfo} from './services/';
import './App.css';
import companyIcon from "./assets/images/icons/icon.jpg";

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
          <Layout.Row>
            <Layout.Col span="20" push="2">
              <Menu theme="light" mode="horizontal" onSelect={this.onSelectNavItem.bind(this)}>
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
                <div className="company-icon"><img src={companyIcon} alt="company-con"/></div>
              </Menu>
            </Layout.Col>
          </Layout.Row>
        </header>
        <main className="App-content">
          <div className="carousel-list">
            <Carousel type="flatcard" indicatorPosition="outside" height="300px" interval="6000">
              {
                this.state.carouselList.map((item, index) => {
                  return (
                    <Carousel.Item key={index} className="carousel-item">
                      <p className="carousel-item-des">{item.des}</p>
                      <img src={item.image} alt='steel-img' className="carousel-item-img"/>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
          <article className="company-des">
            <Layout.Row>
              <Layout.Col span="20" push="2">
                <h2 className="company-des-title">杭州锃钢物资有限公司</h2>
                <p className="company-des-content">{this.state.description}</p>
              </Layout.Col>
            </Layout.Row>
          </article>
        </main>
        <footer className="footer">
          <Layout.Row>
            <Layout.Col span="20" push="2">
              <Layout.Row gutter="40">
                <Layout.Col span="4">
                  <div className="icon">
                    <img src={companyIcon} alt="company-icon"/>
                  </div>
                </Layout.Col>
                <Layout.Col span="14">
                  <div className="about">
                    <h3>关于锃钢</h3>
                    <p>锃钢不仅是一家钢材公司，更是一个汇集满怀激情，有创造力的联系平台。我们和客户共同面对挑战，协同创新，并给客户带来真正价值的服务实现业务升级。同时我们不断寻求钢材服务行业的革新，以求通过信息技术帮助客户成就梦想，并实现我们“成为最令人舒心的建材服务公司”的美好愿景。</p>
                  </div>
                </Layout.Col>
                <Layout.Col span="6">
                  <div className="communication">
                    <div className="communication-item">
                      <h4 className="communication-title">中国区服务电话</h4>
                      <p className="communication-content">0571-88668281</p>
                      <p className="communication-content">15372059980/15158046650</p>
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </Layout.Col>
          </Layout.Row>
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
