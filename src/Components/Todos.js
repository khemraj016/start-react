import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
		let todoItems;
		if (this.props.todos) {
			todoItems = this.props.todos.map(todo => {
				//console.log(todo);
				return(
					<TodoItem key={todo.title} todo = {todo} />
				);
			});
		}

    return (
      <div className="Todo">
      	<h3> To do List </h3>
       	{todoItems}
      </div>
    );
  }
}

export default Todos;