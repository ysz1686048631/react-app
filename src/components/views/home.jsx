import React, {Component} from 'react';

import {NavLink,Route,Redirect,BrowserRouter} from 'react-router-dom'
import '../style/tabbar.css'

//如果路由跳转页面没有显示出来 那就 删除多余的BrowserRouter 
export default class home extends Component {
        state = {
                root:{}
        }
        componentDidMount(){

                   
        }
        render() {
  
        return (<div className='home'>
                      aaa
                </div>);
        }
}