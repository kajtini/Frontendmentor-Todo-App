import { Todo } from "../types";

interface TodosTasksInfoProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosTasksInfo = ({ todos, setTodos }: TodosTasksInfoProps) => {
    const handleClearCompletedClick = () => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.status === "active")
        );
    };

    return (
        <li className="py-4 px-5 flex items-center justify-between text-sm text-light-dark-grayish-blue lg:text-base dark:text-dark-dark-grayish-blue">
            <p>
                {todos.filter((todo) => todo.status === "active").length} items
                left
            </p>
            <button onClick={handleClearCompletedClick}>Clear completed</button>
        </li>
    );
};

export default TodosTasksInfo;
