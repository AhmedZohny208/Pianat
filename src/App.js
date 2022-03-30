import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Views from './views';

function App() {
  return (
    <div className="App">
      <Router basename=''>
        <Switch>
          <Route path="/" component={Views}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
