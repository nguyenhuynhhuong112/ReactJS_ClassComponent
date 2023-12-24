import React from "react";
import { Link } from "react-router-dom";
import "./Todolist.scss";
import { connect } from "react-redux";
import { TodoAction } from "../redux/TodoAction";
import { dataTodo } from "../data";

class TodoList extends React.PureComponent {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { todos } = this.props;
    console.log("todos", todos)
    return (
      <div className="body">
        <div className="todo">
          {  todos.data?.map((todoItem) => (
            <div className="todo-task" key={todoItem.id}>
              <button type="submit" className="btn">
                <span>Edit</span>
              </button>
              <span className="task">{`${todoItem.task}`}</span>
              <button type="submit" className="btn">
                <span>Delete</span>
              </button>
            </div>
          ))}
        </div>
        <div className="btn-add">
          <Link to="/add">
            <button type="button" className="btn">
              <span>Add Todo</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(TodoAction.getAll.fulfill(dataTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
