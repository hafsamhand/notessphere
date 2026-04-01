function NoteCard({ note }) {
  const { title, metadata, category } = note;

  const renderContent = () => {
    if (!metadata) return <p>No metadata available.</p>;
    switch (category.name) {
      case 'Recipes':
        return (
          <>
            <p>🍳 {metadata.cuisine}</p>
            <p>⏱️ {metadata.time} min</p>
            <p>🔥 {metadata.level}</p>
          </>
        );

      case 'Movies':
        return (
          <>
            <p>🎬 {metadata.director}</p>
            <p>⏱️ {metadata.duration} min</p>
            <p>🎭 {metadata.genre}</p>
          </>
        );

      case 'Books':
        return (
          <>
            <p>📚 {metadata.author}</p>
            <p>🏷️ {metadata.genre}</p>
          </>
        );

      default:
        return <pre>{JSON.stringify(metadata, null, 2)}</pre>;
    }
  };

  return (
    <div className="bg-gray-200 rounded-2xl shadow-md p-4 hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-sm text-gray-600 space-y-1">
        {renderContent()}
      </div>
    </div>
  );
}

export default NoteCard;