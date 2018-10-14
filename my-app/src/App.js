import React, { Component } from 'react';
import Product from './Components/Product/product';
import Home from './Components/Home/home';
// import News from './Components/News/news';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currPane: 'Product'
    }
  }

  route = (currPage) => {
    const {currPane} = this.state;
    if(currPane === currPage){
      return;
    }
    this.setState({currPane: currPage});
  }

  render() {
    const { currPane } = this.state;
    return (
      <div className="App">
       <div className="app-header">
        <span className="logo">
            Bate Besen
        </span>
        <span 
          onClick={()=>{this.route('Home')}}     
          className="header-item"
          style={{ color: currPane==='Home' ? 'red': '' }}>
          公司简介
        </span>
        <span 
          onClick={() => {this.route('Product')}} 
          className="header-item"
          style={{ color: currPane==='Product' ? 'red': '' }}>
           产品
        </span>
        {
          /* <span 
            onClick={()=>{this.route('News')}} 
            className="header-item"
            style={{ color: currPane==='News' ? 'red': '' }}>
            咨询
            </span> 
          */
        }
       </div>
       <div className="app-body">
          {
            currPane === "Product" &&
            <Product />
          }
          {
            currPane === "Home" &&
            <Home />
          }
          {
            // currPane === "News" &&
            // <News />
          }
       </div>
       <div className="app-footer">
          <div className="footer-item">©2017-2019 东莞市威盛美电子科技有限公司 版权所有 粤ICP备13074094号-1</div>
          <div className="footer-item">东莞市威盛美电子科技有限公司对本网站所有图片与资料拥有所有权,如未经允许盗链或下载使用,必追究相关法律责任</div>
       </div>
      </div>
    );
  }
}

export default App;
