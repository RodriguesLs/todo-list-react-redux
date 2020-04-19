import React from 'react';
import IconButton from '../templates/icon-button';
import { connect } from 'react-redux';
import { markAsDone, markAsPending } from './todo-actions';
import { bindActionCreators } from 'redux';

const TodoList = props => {
  
  const renderRows = () => {

    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={ todo.done ? 'markAsDone' : '' }>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)}/>
          <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPending(todo)}/>
          <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)}/>
        </td>
      </tr>
    ))
  }


  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th className='tableActions'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
