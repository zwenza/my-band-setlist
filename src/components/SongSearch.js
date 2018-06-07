import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { autocomplete, search } from 'ultimate-guitar-scraper';

export default class SongSearch extends Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    if (value) {
      autocomplete(value, (error, suggestions) => {
        if (error) {
          console.log(error);
        } else {
          this.setState(state => (state.dataSource = suggestions));
        }
      });
    } else {
      this.setState(state => (state.dataSource = []));
    }
  };

  onSelect = value => {
    search(
      {
        query: value,
        page: 1,
        type: ['Tab', 'Chords', 'Guitar Pro']
      },
      (error, tabs) => {
        if (error) {
          console.log(error);
        } else {
          this.props.onSelect(tabs);
        }
      }
    );
  };

  render() {
    const { dataSource } = this.state;

    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          onSelect={this.onSelect}
          placeholder="Type a song name"
          size="large"
        />
      </div>
    );
  }
}
