import { Radio } from "antd";
import { useState } from "react";

let clothesOptions = [
  { value: 0, name: "Top" },
  { value: 1, name: "Bottom" },
  { value: 2, name: "Shoes" },
  { value: 2, name: "Accessories" },
];

export default function RadioButtonComponent(options) {
  const [clothesTypes] = useState(clothesOptions);

  return (
    <Radio.Group defaultValue="Top" size="large">
      {clothesTypes.map((clothe) => (
        <Radio.Button value={clothe.value}>{clothe.name} </Radio.Button>
      ))}
    </Radio.Group>
  );
}
