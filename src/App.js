import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import SongSelection from './components/SongSelection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu style={{ width: 180 }} mode="inline">
          <Menu.Item key="1">
            <Icon type="file-text" />
            <span>New Song</span>
          </Menu.Item>
        </Menu>
        <h1>My band set-list</h1>
        <SongSelection />
      </div>
    );
  }
}

export default App;
