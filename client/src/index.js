import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter} from 'react-router-dom';
import BigCalendar from './Components/BigCalendar/BigCalendar';
import TextEditor from './Components/TextEditor/TextEditor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route
      component={BigCalendar}
      path='/main'
    />
    <Route
      component={TextEditor}
      path='/newPost'
    />
    <Route
      component={ShowArticle}
      path='/article'
    />
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
