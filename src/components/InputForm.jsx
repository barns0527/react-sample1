import React from "react";
import { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  // タスク追加関数
  const addTask = (e) => {
    /*ページリロードキャンセル　*/
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // console.log("add task");

    /* タスクを追加する。 */
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        done: false,
      },
    ]);
    // console.log(taskList);
    /* 追加後はテキストをクリア */
    setInputText("");
  };

  //入力値変数保存関数
  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addTask}>         
          <i className="fas fa-plus-circle"></i>
        </button>
      </form>
    </div>
  );
};
