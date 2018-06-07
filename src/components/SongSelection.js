import React, { Component } from 'react';
import { Table, Rate } from 'antd';
import SongSearch from './SongSearch';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
    key: 'artist'
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: rating => <Rate allowHalf disabled defaultValue={rating} />
  }
];

export default class SongSelection extends Component {
  state = {
    searchResult: null
  };

  onSelect = value => {
    console.log(value);
    this.setState(state => (state.searchResult = value));
  };

  render() {
    const { searchResult } = this.state;

    return (
      <div>
        <SongSearch onSelect={this.onSelect} />
        {searchResult ? (
          <Table dataSource={searchResult} columns={columns} />
        ) : (
          <span>Search something!</span>
        )}
      </div>
    );
  }
}
