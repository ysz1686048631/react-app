import React, {Component} from 'react';
import homesrc from '../../assets/img/icon/shouye.png';
import faxian from '../../assets/img/icon/faxian.png';
import caidan from '../../assets/img/icon/caidan.png';
import wode from '../../assets/img/icon/wode.png';
import '../style/tabbar.css';
export default class tabbar extends Component {
        render() {
        return (<div className='tabbar'>
                
                <div>
                              <img src={homesrc} alt=""/>
                              <span>首页</span>
                      </div>
                      <div>
                              <img src={faxian} alt=""/>
                              <span>发现</span>
                      </div>
                      <div>
                              <img src={caidan} alt=""/>
                              <span>订单</span>
                      </div>
                      <div>
                              <img src={wode} alt=""/>
                              <span>我的</span>
                      </div> 
        </div>);
        }
}   