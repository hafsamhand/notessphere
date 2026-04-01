export const categoryForms = {
  Recipes: [
    { name: 'type', label: 'Type (dessert, main...)', type: 'text' },
    { name: 'cuisine', label: 'Cuisine', type: 'text' },
    { name: 'ingredients', label: 'Ingredients (comma separated)', type: 'text' },
    { name: 'time', label: 'Cooking Time', type: 'text' },
    { name: 'level', label: 'Difficulty Level', type: 'text' },
  ],

  Movies: [
    { name: 'director', label: 'Director', type: 'text' },
    { name: 'duration', label: 'Duration (min)', type: 'number' },
    { name: 'genre', label: 'Genre', type: 'text' },
    { name: 'synopsis', label: 'Synopsis', type: 'text' },
  ],

  Books: [
    { name: 'author', label: 'Author', type: 'text' },
    { name: 'genre', label: 'Genre', type: 'text' },
    { name: 'summary', label: 'Summary', type: 'text' },
  ],
};