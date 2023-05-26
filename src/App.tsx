import AddTodoForm from "./components/AddTodoForm";
import ThemeToggler from "./components/ThemeToggler";
import Title from "./components/Title";
import TodosFilters from "./components/TodosFilters";
import TodosList from "./components/TodosList";
import { Todo } from "./types";
import { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

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
        <div className="min-h-screen flex flex-col items-center justify-center bg-light-very-light-grayish-blue text-light-very-dark-grayish-blue font-primary bg-mobile-light bg-no-repeat">
            <div className="max-w-7xl w-full flex-grow px-6 py-12 flex flex-col gap-7">
                <div className="flex items-center justify-between">
                    <Title />
                    <ThemeToggler />
                </div>
                <div className="flex flex-col gap-5">
                    <AddTodoForm setTodos={setTodos} />
                    <TodosList todos={todos} />
                    <TodosFilters />
                </div>
            </div>
        </div>
    );
}

export default App;
