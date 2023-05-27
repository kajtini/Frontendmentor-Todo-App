import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
    handleTodoRemove: (todoID: string) => void;
    handleTodoComplete: (todoID: string) => void;
}

const TodoItem = ({
    todo,
    handleTodoRemove,
    handleTodoComplete,
}: TodoItemProps) => {
    return (
        <>
            <li className="flex items-center justify-between lg:p-5 py-4 px-5 cursor-pointer">
                <div className="flex items-center gap-3 lg:gap-5">
                    <div
                        className={`border border-light-light-grayish-blue h-6 w-6 rounded-full cursor-pointer ${
                            todo.status === "completed" &&
                            "bg-gradient-to-br from-turqoise to-purple border-none"
                        } flex justify-center items-center dark:border-dark-very-dark-grayish-blue`}
                        onClick={() => handleTodoComplete(todo.id)}
                    >
                        <img
                            className={`${
                                todo.status === "completed" ? "block" : "hidden"
                            } `}
                            src={check}
                            alt="check icon"
                        />
                    </div>
                    <p
                        className={`${
                            todo.status === "completed" &&
                            "line-through text-light-light-grayish-blue dark:text-dark-dark-grayish-blue"
                        } lg:text-xl`}
                    >
                        {todo.description}
                    </p>
                </div>

                <img
                    className="cursor-pointer"
                    src={cross}
                    alt="delete todo icon"
                    onClick={() => handleTodoRemove(todo.id)}
                />
            </li>

            <hr className="dark:border-dark-very-dark-grayish-blue" />
        </>
    );
};

export default TodoItem;
