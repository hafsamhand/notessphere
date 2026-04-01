export const categoryForms = {
  Recipes: [
    { name: 'type', label: 'Type (dessert, main...)', type: 'select', options: ['Dessert', 'Main', 'Entry', 'Appetizer'] },
    { name: 'cuisine', label: 'Cuisine', type: 'text' },
        { name: 'ingredients', label: 'Ingredients', type: 'textarea' },

    { name: 'time', label: 'Cooking Time(min)', type: 'number' },
    { name: 'level', label: 'Difficulty Level', type: 'select', options: ['Easy', 'Medium', 'Hard'] },
  ],

  Movies: [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'director', label: 'Director', type: 'text' },
    { name: 'duration', label: 'Duration (min)', type: 'number' },
    { name: 'genre', label: 'Genre', type: 'select', options: ['Action', 'Drama', 'Comedy', 'Fantasy', 'Horror'] },
    { name: 'synopsis', label: 'Synopsis', type: 'textarea' },
  ],

  Books: [
    { name: 'author', label: 'Author', type: 'text' },
    { name: 'genre', label: 'Genre', type: 'select', options: ['Action', 'Drama', 'Comedy'] },
    { name: 'summary', label: 'Summary', type: 'textarea' },
  ],
};