import cross from "../assets/icon-cross.svg";
import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <>
            <li className="flex items-center justify-between  py-4 px-5">
                <div className="flex items-center gap-3">
                    <div className="border border-light-light-grayish-blue p-2 rounded-full" />
                    <p>{todo.description}</p>
                </div>

                <img src={cross} alt="delete todo icon" />
            </li>

            <hr />
        </>
    );
};

export default TodoItem;
