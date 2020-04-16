import React, { Component } from 'react';
import PageHeader from '../templates/page-header';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='To do' small='register' />
      </div>
    )
  }
}