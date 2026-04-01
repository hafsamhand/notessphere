import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../../services/notes.service";
import DynamicForm from "../../components/DynamicForm";
import { getCategories } from "../../services/categories.service";
import Modal from "../../components/Modal";
import NoteCard from "../../components/NoteCard";
import AppLayout from "../../components/layout/AppLayout";
import Swal from 'sweetalert2'

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [searchParams] = useSearchParams();
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);


  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsEdit(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete this note?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteNote(id);
        fetchNotes();
        Swal.fire("Deleted!", "", "success");
      }
      else return;
    });
  };

  const handleSubmit = async (data, title) => {
    if (isEdit) {
      await updateNote(selectedNote.id, { metadata: data, title });
      setIsEdit(false);
    } else {
      await createNote({
        title: title || `${category.name} note`,
        categoryId: Number(categoryId),
        metadata: data,
      });
    }

    setOpen(false);
    setSelectedNote(null);
    fetchNotes();
  };

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Notes - {category?.name}</h1>

        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg text-2xl hover:bg-blue-600"
        >
          +
        </button>

        {category && (
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <DynamicForm
              categoryName={category.name}
              initialData={selectedNote?.metadata}
              initialTitle={selectedNote?.title}
              onSubmit={handleSubmit}
            />
          </Modal>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default NotesPage;
