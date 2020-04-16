import React, { Component } from 'react';
import PageHeader from '../templates/page-header';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='To do' small='register' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}