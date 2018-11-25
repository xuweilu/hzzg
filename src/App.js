import React, {Component} from 'react';
import {Carousel, Menu, Layout} from 'element-react';
import 'element-theme-default';

import {getCarouselList, getPriceInfo} from './services/';
import './App.css';
import companyIcon from "./assets/images/icons/icon.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselList: [],
      priceInfo: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
            {/*<div className="company-icon"><img src={companyIcon} alt="company-con"/></div>*/}
          </Menu>
        </header>
        <main className="App-content">
          <div className="price-info">
            <Carousel indicatorPosition="none" interval="3000" type="flatcard" arrow="never" height="50px">
              {
                this.state.priceInfo.map((item, index) => {
                  return (
                    <Carousel.Item key={index} className="price-info-item">
                      <div>
                        <span className="price-info-name">{item.name}</span>
                        <span className="price-info-price">{`￥${item.price}`}</span>
                      </div>
                      <div>
                        <i className={item.priceChange > 0 ? "green el-icon-arrow-up" : "red el-icon-arrow-down"}></i>
                        <span
                          className={item.priceChange > 0 ? "price-info-change green" : "price-info-change red"}>{item.priceChange > 0 ? `+${item.priceChange}` : item.priceChange}</span>
                      </div>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
          <div className="carousel-list">
            <Carousel indicatorPosition="outside" height="500px" interval="6000">
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
            <h2 className="company-des-title">
              杭州锃钢物资有限公司
            </h2>
            <p className="company-des-content">
              杭州锃钢物资有限公司，坐落于浙江省杭州市。
            </p>
            <p className="company-des-content">
              是从事钢铁销售的一家大型流通企业。公司拥有固定大量库存资源。物资仓储、钢材批发、配送于一体的多元化经营的私营企业。
            </p>
            <p className="company-des-content">
              在激烈的市场形式下，秉承“敬业、诚信、共赢、合作”的经营理念，努力耕耘，奋发进取，勇于开拓。本公司主要经营螺纹钢、线材、工角槽钢、镀锌管、无缝管、焊管、板材、管材，自备库存。与江浙沪地区上百家客户长期保持着业务往来。
            </p>
            <p className="company-des-content">
              在公司领导层和销售人员的不懈努力下，已经进入良好的贸易运作轨道。公司与多家大型的钢铁生产企业有着长期合作的关系，产品以直接销售终端户为主，以市场流通为辅的营销策略，在同行业中享有较高的声誉，在客户中有很好的口碑，赢得广大客户和厂家及社会人士的认同与支持。
            </p>
            <p className="company-des-content">我们坚持“以人为本”的管理理念，本着“客户至上”的原则，建立完善的服务体系，达到”务实高效，追求卓越“的目标。</p>
            <p className="company-des-content">杭州锃钢物资有限公司持续完善，为用户提供更好的服务”为浙江进步作贡献。坚持不懈与社会各界共创美好未来。</p>
          </article>
        </main>
        <footer className="footer">
          <Layout.Row gutter="40">
            <Layout.Col md="4">
              <div className="icon">
                <img src={companyIcon} alt="company-icon"/>
              </div>
            </Layout.Col>
            <Layout.Col md="14">
              <div className="about">
                <h3>关于锃钢</h3>
                <p>锃钢不仅是一家钢材公司，更是一个汇集满怀激情，有创造力的联系平台。我们和客户共同面对挑战，协同创新，并给客户带来真正价值的服务实现业务升级。同时我们不断寻求钢材服务行业的革新，以求通过信息技术帮助客户成就梦想，并实现我们“成为最令人舒心的建材服务公司”的美好愿景。</p>
              </div>
            </Layout.Col>
            <Layout.Col md="6">
              <div className="communication">
                <div className="communication-item">
                  <h4 className="communication-title">中国区服务电话</h4>
                  <p className="communication-content">0571-88668281</p>
                  <p className="communication-content">15372059980/15158046650</p>
                </div>
              </div>
            </Layout.Col>
          </Layout.Row>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    getCarouselList().then(data => {
      this.setState({
        carouselList: [...data.dataList]
      })
    });
    getPriceInfo().then(data => {
      this.setState({
        priceInfo: [...data]
      })
    })
  }

  onSelectNavItem(index, indexPath) {
    console.log(index, indexPath);
  }
}

export default App;
