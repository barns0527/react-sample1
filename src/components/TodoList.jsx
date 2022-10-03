import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDone = (id) => {
    /* 当該タスクに取り消し線を追加。 */
    setTaskList(
      taskList.map((task) => {
        // console.log("a");
        if (id === task.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    /* 当該タスクを削除する。 */
    /* フィルタを使い、選択タスクとidが等しくない物を残す。*/
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.done ? "done" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleDone(task.id)}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
