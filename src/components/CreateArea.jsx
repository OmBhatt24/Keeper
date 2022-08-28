import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isActive, setActive] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const handleClick = () => {
    props.addNote(note);
    setNote({ title: "", content: "" });
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="create-note">
        {isActive && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isActive ? "3" : "1"}
          onClick={() => setActive(true)}
          value={note.content}
        />
        <Zoom in={isActive}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
