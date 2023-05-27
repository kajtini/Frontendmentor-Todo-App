export interface Todo {
    id: string;
    description: string;
    status: "completed" | "active";
}

export type TodosFilter = "all" | "active" | "completed";
