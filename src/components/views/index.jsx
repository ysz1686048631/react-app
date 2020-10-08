import React, {Component} from 'react';

import Tabbar from '../layout/tabbar'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

export default class Index extends Component {
render() {
return (
        // 路由重定向 可以直接在Switch下写入<Redirect to="/home" /> ,也可以使用Route的render属性来重定向
<BrowserRouter>
    <Route
      render={({ location }) => (
        <div>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />
           
         
          <div className='container'>
                  
                        <div>
                           
                       aaa
                        
                        </div>
                        <div>
                                <Tabbar></Tabbar>
                        </div>
                </div>
        </div>
      )}
    />
  </BrowserRouter>

);
}
}