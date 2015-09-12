/*global document:false*/
import React from 'react';
import classTree from '../src/classTree';

@classTree
class App extends React.Component {
  render() {
    return (
      <div classTree='Demo'>
        <div classTree='main'>
          <div classTree='title'>
            Hello !
          </div>
        </div>
        <div classTree='aside'>
          Aside
        </div>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
