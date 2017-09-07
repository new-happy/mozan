import React, { Component } from 'react';
import './footer.css'
import './fronts/iconfont.css'



class Footer extends Component {
  render() {
    return (
  <div className="footer">
    <div className="footer_up">
      <div className="footer_upp">
        <div className="footer_left">
          <h1>帮助信息</h1>
          <div className='left-a'>
            <ul>
              <li className='zhinan'>
                <i className="iconfont">&#xe65d;</i>
                <a href="">购物指南</a>
              </li>
              <li>
                <i className="iconfont">&#xe633;</i>
                <a href="">支付方式</a>
              </li>
              <li>
                <i className="iconfont">&#xe636;</i>
                <a href="">配送方式</a>
              </li>
              <li>
                <i className="iconfont">&#xe51a;</i>
                <a href="">售后服务</a>
              </li>
            </ul>
            <ul>
              <li>
                <i className="iconfont">&#xe603;</i>
                <a href="">服务中心</a>
              </li>
              <li>
                <i className="iconfont">&#xe643;</i>
                <a href="">关于我们</a>
              </li>
              <li>
                <i className="iconfont">&#xe66a;</i>
                <a href="">免责条款</a>
              </li>
              <li>
                <i className="iconfont">&#xe62d;</i>
                <a href="">友情链接</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_min">
          <h1>关注我们</h1>
          <div className="min-a">
            <div>
              <img src={require("./images/tup9.jpg")}/>
              <img src={require("./images/tup11.jpg")}/>
            </div>
            <div>
              <img src={require("./images/tup10.jpg")}/>
              <img src={require("./images/tup12.jpg")}/>
            </div>
          </div>
        </div>
        <div className="footer_rigth">
          <h1>客服热线</h1>
          <div className="right-a">
            <i className="iconfont">&#xe603;</i>
            <b>
              400 113 5353<br/>
              <span>[ 周一至周五 9:00-18:00 ]</span>
            </b>
        </div>
        </div>
      </div>
    </div>
    <div className="footer_down">
      <div className="footer_downd">
        <img src={require("./images/logo_03.png")}/>
        <span>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved地址：北京市朝阳区建国路93号院4号楼4层505</span>
      </div>
    </div>

  </div>
    )
  }
}

export default Footer;
