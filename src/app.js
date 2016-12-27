/**
 * Created by SWSD on 2016-12-26.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';
// 引入Ant-Design样式 & Animate.CSS样式
import 'antd/dist/antd.min.css'

import App from './components/App'

const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
