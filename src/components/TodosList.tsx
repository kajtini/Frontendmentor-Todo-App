import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodosListProps {
    todos: Todo[];
}

const TodosList = ({ todos }: TodosListProps) => {
    return (
        <ul className="bg-light-very-light-gray rounded-lg shadow-sm">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodosList;
