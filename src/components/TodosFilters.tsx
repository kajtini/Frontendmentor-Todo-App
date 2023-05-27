import { TodosFilter } from "../types";

interface TodosFiltersProps {
    todosFilter: TodosFilter;
    setTodosFilter: React.Dispatch<React.SetStateAction<TodosFilter>>;
}

const TodosFilters = ({ todosFilter, setTodosFilter }: TodosFiltersProps) => {
    const filters: { id: number; filter: TodosFilter }[] = [
        {
            id: 0,
            filter: "all",
        },
        { id: 1, filter: "active" },
        { id: 2, filter: "completed" },
    ];

    const handleFilterClick = (filter: TodosFilter) => setTodosFilter(filter);

    return (
        <ul className="flex bg-light-very-light-gray py-4 rounded-lg items-center justify-center gap-5 font-bold text-light-dark-grayish-blue shadow-sm dark:bg-dark-very-dark-desaturated-blue dark:text-dark-dark-grayish-blue">
            {filters.map((filter) => (
                <li
                    className={`capitalize ${
                        todosFilter === filter.filter && "text-bright-blue"
                    } lg:text-lg cursor-pointer`}
                    key={filter.id}
                    onClick={() => handleFilterClick(filter.filter)}
                >
                    {filter.filter}
                </li>
            ))}
        </ul>
    );
};

export default TodosFilters;
