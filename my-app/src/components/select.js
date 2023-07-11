import { Select, Space } from "antd";

const color = [
  { label: "aqua", value: "aqua" },
  { label: "blue", value: "blue" },
  { label: "pink", value: "pink" },
  { label: "yellow", value: "yellow" },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const selectComponent = () => (
  <Space
    style={{
      width: "100%",
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder="Select Color"
      onChange={handleChange}
      options={color}
    />
  </Space>
);
export default selectComponent;
