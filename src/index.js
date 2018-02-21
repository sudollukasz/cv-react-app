import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import store from './store'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'))
registerServiceWorker()
