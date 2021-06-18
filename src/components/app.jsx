import React, {useState} from "react";
import ReactDOM from "react-dom";
import Heading from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";



function App() {
    // return (<div>
    //     <Heading/>
    //     {notes.map(note => ( <Note
    //        key={note.id}
    //        title={note.title}
    //        content={note.content}
    //        />
    //     ))}
    //     <Footer/>
    //   </div>);

    const [notes, setNotes] = useState([])

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }

    return(
      <div>
        <Heading />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
        <Footer />
      </div>
    )
}
  
  export default App;