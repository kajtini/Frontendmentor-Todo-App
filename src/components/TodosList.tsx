import { Todo } from "../types";
import TodoItem from "./TodoItem";
import TodosTasksInfo from "./TodosTasksInfo";

interface TodosListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList = ({ todos, setTodos }: TodosListProps) => {
    const handleTodoRemove = (todoID: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoID));
    };

    const handleTodoComplete = (todoID: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoID
                    ? {
                          ...todo,
                          status:
                              todo.status === "completed"
                                  ? "active"
                                  : "completed",
                      }
                    : todo
            )
        );
    };

    return (
        <ul className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-lg shadow-sm">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleTodoRemove={handleTodoRemove}
                    handleTodoComplete={handleTodoComplete}
                />
            ))}

            {todos.length > 0 && (
                <TodosTasksInfo todos={todos} setTodos={setTodos} />
            )}
        </ul>
    );
};

export default TodosList;
