import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    return (
        <ul className={classes.todo}>
            {todoCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
