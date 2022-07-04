import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState("");

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "テストタイトル",
      content: "テスト投稿です",
      modDate: Date.now(),
    };
    // setNotes({
    // title: title,
    // content: content,
    // });
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
