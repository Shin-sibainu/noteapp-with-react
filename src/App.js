import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) {
      setActiveNote(notes[0].id);
    } else {
      setActiveNote(null);
    }
  }, []);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "テストタイトル",
      content: "テスト投稿です",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  //レンダリングされるたびに発火してる。
  const getActiveNote = () => {
    console.log("getactivenote");
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す。
    //[{...},{...},{...}] ← updatedNotesArray ← 修正されてる新しい配列
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        console.log(updatedNote);
        return updatedNote;
      }
      console.log("####");
      return note;
    });

    console.log(updatedNotesArray);
    setNotes(updatedNotesArray);
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
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
