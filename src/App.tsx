import AddTodoForm from "./components/AddTodoForm";
import ThemeToggler from "./components/ThemeToggler";
import Title from "./components/Title";
import TodosFilters from "./components/TodosFilters";
import TodosList from "./components/TodosList";
import { Todo, TodosFilter } from "./types";
import { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todosFilter, setTodosFilter] = useState<TodosFilter>("all");
    const [isDark, setIsDark] = useState(false);

    const getFilteredTodos = (filter: TodosFilter): Todo[] => {
        const completedTodos = todos.filter(
            (todo) => todo.status === "completed"
        );
        const activeTodos = todos.filter((todo) => todo.status === "active");

        switch (filter) {
            case "active":
                return activeTodos;
            case "completed":
                return completedTodos;
            default:
                return todos;
        }
    };

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos && savedTodos.length > 0) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos.length !== 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    return (
        <div className={`${isDark && "dark"}`}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-light-very-light-grayish-blue text-light-very-dark-grayish-blue font-primary bg-mobile-light bg-no-repeat sm:bg-desktop-light bg-contain dark:bg-mobile-dark dark:bg-dark-very-dark-blue dark:text-dark-light-grayish-blue sm:dark:bg-desktop-dark">
                <div className="max-w-2xl w-full flex-grow px-6 py-12 flex flex-col gap-7 lg:gap-10">
                    <div className="flex items-center justify-between">
                        <Title />
                        <ThemeToggler setIsDark={setIsDark} isDark={isDark} />
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-7">
                        <AddTodoForm setTodos={setTodos} />
                        <TodosList
                            todos={getFilteredTodos(todosFilter)}
                            setTodos={setTodos}
                        />
                        {todos.length > 0 && (
                            <TodosFilters
                                todosFilter={todosFilter}
                                setTodosFilter={setTodosFilter}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
