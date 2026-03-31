import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getNotes, createNote } from "../../services/notes.service";

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const fetchNotes = () => {
    getNotes(categoryId).then((res) => setNotes(res.data));
  };

  useEffect(() => {
    fetchNotes();
  }, [categoryId]);

  const handleCreate = async () => {
    await createNote({
      title,
      categoryId: Number(categoryId),
    });

    setTitle("");
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes</h1>

      <div>
        <input
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleCreate}>Add</button>
      </div>

      <div style={{ display: "grid", gap: "10px" }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{note.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
