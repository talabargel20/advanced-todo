# React Todo Application

A modern, responsive Todo application built with React. This application allows users to manage their tasks with features like categorization, due dates, and priority levels.

## Features

- ✨ Create, read, update, and delete todos
- 📝 Task categorization (Work, Personal, Shopping)
- 📅 Due date assignment
- ⭐ Priority levels (High, Regular, Low)
- 🔍 Search functionality
- 🗂️ Filter tasks by status (All, Active, Completed)
- 💾 Local storage persistence
- 🌐 Full RTL support for Hebrew language
- ✅ Task completion toggling

## Technologies Used

- React 18
- CSS3
- LocalStorage API
- Modern JavaScript (ES6+)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/talabargel20/advanced-todo.git
```

2. Navigate to the project directory:
```bash
cd todo-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Adding a Todo:**
   - Enter task description
   - Select category
   - Set due date (optional)
   - Choose priority level
   - Click "Add" button

2. **Managing Todos:**
   - Check/uncheck to toggle completion
   - Click delete button to remove
   - Use search bar to find specific todos
   - Filter by status or category

3. **Filtering:**
   - Use the dropdown to filter by completion status
   - Use the category selector to filter by category
   - Use the search bar for text-based filtering

## Project Structure

```
todo-app/
  ├── src/
  │   ├── App.js          # Main application component
  │   ├── App.css         # Styles
  │   └── index.js        # Entry point
  ├── public/
  │   └── index.html
  ├── package.json
  └── README.md
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Create React App
- React Documentation
- MDN Web Docs