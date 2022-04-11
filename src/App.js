import { ConfigProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import './scss/styles.css'

import Views from './views'

function App() {
  return (
    <div className='App'>
      <ConfigProvider direction='rtl'>
        <Router basename=''>
          <Switch>
            <Route path='/' component={Views} />
          </Switch>
        </Router>
      </ConfigProvider>
    </div>
  )
}

export default App
