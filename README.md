# Kanban Board React App

A fully responsive and interactive Kanban board built with React, providing an intuitive way to organize and manage tasks visually.

## Features

- **Dynamic Boards and Columns:** Create, edit, and delete boards and columns to suit your project needs.
- **Draggable Tasks:** Smooth and customizable drag-and-drop functionality powered by `@dnd-kit/sortable`.
- **Modal and Dropdown Menus:** Integrated modals and dropdown menus using Radix UI for accessible and user-friendly interactions.
- **Theming Support:** Styled with Radix Themes for a consistent and elegant appearance.
- **Styling Utilities:** Uses `class-variance-authority` and `clsx` to manage conditional class names easily.
- **State Management:** Leverages `immer` to handle immutable updates for clean and predictable state logic.
- **Responsive Design:** Fully optimized for various screen sizes to ensure usability across all devices.

## Live Demo

Check out the live app here: [Kanban Board App](https://kanban-board-three-liart.vercel.app/)

## Screenshot

![Kanban Board Preview](/kanban.jpeg)

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-kanban-board-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-kanban-board-repo
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Usage

1. **Create a New Board:** Click on `+ Create New Board` on the sidebar.
2. **Add Columns:** Use the `+ New Column` button to add a column to your board.
3. **Add Tasks:** Add tasks to any column by clicking `+ Add New Task`.
4. **Reorganize Tasks:** Drag and drop tasks between columns as needed.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for improvements, bug fixes, or new features.
