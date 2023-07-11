function Form({ fields }) {
  return (
    <div>
      <Field name={fields[0].name} />
      <Field name={fields[1].name} />
      <Field name={fields[2].name} />
      <Button />
    </div>
  );
}

function Field({ name }) {
  return (
    <p>
      <input type="text" placeholder={name} />
    </p>
  );
}

function Button() {
  return (
    <p>
      <button type="button">Submit</button>
    </p>
  );
}

const FIELDS = [{ name: "Name" }, { name: "Address" }, { name: "Phone" }];

export default function App() {
  return <Form fields={FIELDS} />;
}
