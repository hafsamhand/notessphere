import { useState } from 'react';
import { categoryForms } from '../config/categoryForms';

function DynamicForm({ categoryName, onSubmit }) {
  const fields = categoryForms[categoryName] || [];

  const [form, setForm] = useState({});
  const [title, setTitle] = useState("");

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(form, title);
    setForm({});
  };

   const renderField = (field) => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            className="w-full border p-2 rounded"
            value={form[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );

      case 'select':
        return (
          <select
            className="w-full border p-2 rounded"
            value={form[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          >
            <option value="">Select...</option>
            {field.options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={field.type}
            className="w-full border p-2 rounded"
            value={form[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
    }
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">{categoryName} Form</h3>

      <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded mb-4 w-full"
          />
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1 text-sm">{field.label}</label>
          {renderField(field)}
        </div>
      ))}

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Note</button>
    </div>
  );
}

export default DynamicForm;