import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="body" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">タイトル</h1>
        <div className="markdown-preview">ノートプレビュー</div>
      </div>
    </div>
  );
};

export default Main;
