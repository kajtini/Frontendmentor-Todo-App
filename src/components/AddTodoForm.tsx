import { Todo } from "../types";
import { useState } from "react";
import { nanoid } from "nanoid";

interface AddTodoFormProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodoForm = ({ setTodos }: AddTodoFormProps) => {
    const [todo, setTodo] = useState("");

    const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTodo(e.target.value);

    const handleAddTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos((prevTodos) => [
            { id: nanoid(), description: todo, status: "active" },
            ...prevTodos,
        ]);
        setTodo("");
    };

    return (
        <form
            className="px-5 py-4 bg-light-very-light-gray rounded-lg flex gap-4 items-center shadow-sm"
            onSubmit={handleAddTodoSubmit}
        >
            <div className="border border-light-light-grayish-blue p-2  rounded-full" />

            <input
                className="w-full bg-transparent focus:outline-none"
                type="text"
                placeholder="Create a new todo..."
                value={todo}
                onChange={handleTodoChange}
            />
        </form>
    );
};

export default AddTodoForm;
