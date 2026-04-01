import { useState } from 'react';
import { categoryForms } from '../config/categoryForms';

function DynamicForm({ categoryName, onSubmit }) {
  const fields = categoryForms[categoryName] || [];

  const [form, setForm] = useState({});

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({});
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>{categoryName} Form</h3>

        {fields.length === 0 && <p>No form available for this category.</p>}
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: '10px' }}>
          <label>{field.label}</label>
          <input
            type={field.type}
            value={form[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default DynamicForm;