const TodosFilters = () => {
    return (
        <ul className="flex bg-light-very-light-gray py-4 rounded-lg items-center justify-center gap-5 font-bold text-light-dark-grayish-blue shadow-sm">
            <li className="text-bright-blue">All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
    );
};

export default TodosFilters;
