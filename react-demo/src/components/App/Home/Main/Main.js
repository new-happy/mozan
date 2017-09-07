import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="banner">
      		<div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <div className="swiper-slide"><img src={require("./images/1.jpg")}/></div>
                <div className="swiper-slide"><img src={require("./images/2.jpg")}/></div>
              <div className="swiper-slide"><img src={require("./images/3.jpg")}/></div> */}
            </div>
          </div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-button-next swiper-button-white"></div>
        </div>
        <section>
          <div className='zhuti'>
            <aside>
              <div className='yushou'>
                <img src={require("./images/yushou_03.png")}/>
                <h1>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h1>
              </div>
              <div className="daojishi">
                <span>距离预售结束</span>
                <div className="jishi">
                  <div className='day_a'>
                    <span className="day">10</span>
                    <span>:</span>
                    <span className="hour">15</span>
                    <span>:</span>
                    <span className="minutes">35</span>
                    <span>:</span>
                    <span className="seconds">55</span>
                  </div>
                  <div className='day_b'>
                    <i>天</i>
                    <i>时</i>
                    <i>分</i>
                    <i>秒</i>
                  </div>
                </div>
                <span>
                  <span>注</span>：商品将于<span>2016/10/5</span>统一发货!</span>
              </div>
            </aside>
            <article>
              <div className="dingjin">
                <span>定金</span>
                <b>￥ <b>500.00</b></b><br/>
                <span>全款金额：￥150.00</span>
              </div>
              <div className="kuanshi">
                <span>款式</span>
                <div>
                  <a href="#">iphone 5</a>
                  <a href="#">iphone 6</a>
                  <a href="#">iphone 6+</a>
                </div>
              </div>
              <div className="chima">
                <span>尺码</span>
                <div>
                  <a href="#">XXS</a>
                  <a href="#">XS</a>
                  <a href="#">S</a>
                  <a href="#">M</a>
                  <a href="#">L</a>
                  <a href="#">XL</a>
                  <a href="#">XXL</a>
                </div>
              </div>
              <div className="shuliang">
                <span>数量</span>
                <div>
                  <a className="jian" href="#">-</a>
                  <span className="shu">1</span>
                  <a className="jia" href="#">+</a>
                </div>
                </div>
            </article>
          </div>
          <div>
            <div className="anniu">
              <a className="yuding" href="">立即预定</a>
            </div>
            <div className="bichu">
              <img className="ditu" src={require("./images/ditu_07.jpg")}/>
              <img className="buchuc" src={require("./images/bichu_07.jpg")}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
