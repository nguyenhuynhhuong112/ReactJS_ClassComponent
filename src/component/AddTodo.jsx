import { PureComponent } from "react";
import "./AddTodo.scss";
import { Link } from "react-router-dom";
import { TodoAction } from "../redux/TodoAction";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };
  }

  handleInputChang = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  handlAddTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: uuidv4(),
      task: todoText,
    };
    this.props.createTodo(newTodo);
    const { todo } = this.props;
    console.log("todo", todo.data);
  };
  render() {
    return (
      <div>
        <input
          value={this.state.todoText}
          onChange={this.handleInputChang}
          type="text"
          className="inpt"
          placeholder="what do you task today?"
        />
        <Link to="/">
          <button
            className="add-todo"
            type="submit"
            onClick={this.handlAddTodo}
          >
            <span>Add Todo</span>
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo,
});
const mapDispatchToProps = (dispatch) => ({
  createTodo: (newTodo) => dispatch(TodoAction.createTodo.fulfill(newTodo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
