import { Input } from "antd";
import { useState } from "react";
const { TextArea } = Input;

export default function TextAreaComponent(description) {
  const [name, setName] = useState("");
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea
      rows={4}
      placeholder={description}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </>;
}
