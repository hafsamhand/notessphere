import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getNotes, createNote } from "../../services/notes.service";
import DynamicForm from '../../components/DynamicForm';
import { getCategories } from '../../services/categories.service';
function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("categoryId");

    useEffect(() => {
    getCategories().then((res) => {
      const found = res.data.find((c) => c.id == categoryId);
      setCategory(found);
    });
  }, [categoryId]);
  const fetchNotes = () => {
    getNotes(categoryId).then((res) => setNotes(res.data));
  };

  useEffect(() => {
    fetchNotes();
  }, [categoryId]);

  const handleCreate = async (metadata) => {
    await createNote({
      title: `${category.name} note`,
      categoryId: Number(categoryId),
      metadata,
    });

    fetchNotes();
  };

 return (
    <div style={{ padding: '20px' }}>
      <h1>Notes - {category?.name}</h1>

      {category && (
        <DynamicForm
          categoryName={category.name}
          onSubmit={handleCreate}
        />
      )}

      <div style={{ marginTop: '20px' }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <h4>{note.title}</h4>
            <pre>{JSON.stringify(note.metadata, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
