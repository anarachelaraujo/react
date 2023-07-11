import { Button } from "antd";
import { useState } from "react";
// import { Input } from "antd";
import TextAreaComponent from "./textArea";
// const { TextArea } = Input;

let nextId = 0;

//function TextArea1 ()

export default function ButtonComponent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState([]);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...description.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...description.slice(insertAt),
    ];
    setDescription(nextArtists);
    setName("");
  }

  return (
    <div>
      <TextAreaComponent />
      <Button type="primary" onClick={handleClick}>
        Save
      </Button>
      <ul>
        {description.map((des) => (
          <li key={des.id}>{des.name}</li>
        ))}
      </ul>
    </div>
  );
}
