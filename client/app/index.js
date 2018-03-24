import React from "react";
import { render } from "react-dom";

import App from "./components/App/App";
import TodoList from "./components/Todo/TodoList";

render(
    <App>
        <TodoList />
    </App>,
    document.getElementById("app")
);
