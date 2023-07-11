import React from "react";

import RadioButtonComponent from "./components/radioButton";
import SelectComponent from "./components/select";
import UploadImage from "./components/uploadImage";

import { Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import ButtonComponent from "./components/button";

const { Title } = Typography;

let clothesOptions = [
  { id: 0, name: "top" },
  { id: 1, name: "bottom" },
  { id: 2, name: "shoes" },
];

function AddClothes({ fields }) {
  return (
    <div style={{ color: "black", lineHeight: 3, padding: 200 }}>
      <Title>Add New Piece</Title>
      <Title level={5}>Select Type</Title>
      <RadioButtonComponent options={clothesOptions} />
      <Title level={5}>Add a description</Title>
      <TextArea description="Enter a detailed description" />
      <Title level={5}>Select All colors for the piece</Title>
      <SelectComponent />
      <Title level={5}>Upload images </Title>
      <UploadImage />
      <ButtonComponent text="Save" />
    </div>
  );
}

export default function App() {
  return <AddClothes />;
}
