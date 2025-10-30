import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router";

const TaskList = () => {
  const mockData = [
    { id: 1, title: "Paint Wall", description: "Paint it!" },
    { id: 2, title: "Learn React", description: "Learn it!" },
    { id: 3, title: "Walk Dog", description: "Walk it!" },
  ];

  return (
    <div>
      <h1>Task List</h1>

      <ul>
        {mockData.map((data) => (
          <li key={data.id}>
            <Link to={"/" + data.id}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
