# WDD 430: Web Full-Stack Development

BYU-I logo

Home
W1
W2
W3
W4
W5
W6
W7

## Assignment: React Introduction

### Overview

The objective of the assignment activity is to provide a hands-on experience building a basic React application as an introduction to React concepts.

### Instructions

#### Set up your workspace

- Create a new project folder on your computer (give it a descriptive name like "react-todo-list").
- Open this folder in VS Code.
- Initialize a Git repository in your project folder right away. This will track your changes and allow you to easily revert to earlier versions if needed. Use the command `git init` in your terminal.

#### Build the todo list application

- Follow along with the tutorial at: Learn React With This One Project - by Web Dev Simplified
- Code along with the tutorial, pause to experiment, and try to understand why things work the way they do.

#### Capture your success

- Once your to-do list is working, add at least two items to your list.
- Take a screenshot of your application running in your browser with those items displayed. You will be submitting this image.

#### Publish the project

- Publish this project to a public repository on GitHub (don't mix it with other projects).

### Submission

Submit a document in Canvas that contains the following items:

- The project URL from your public GitHub account.
- The screenshot image of your locally working application.

Back

Copyright © Brigham Young University-Idaho | All rights reserved

---

## Video Context (Summary)

Reference video:

- https://www.youtube.com/watch?v=Rh3tobg7hEo

Notes (high level, not a transcript):

- React mindset: declarative UI (describe what you want) vs imperative steps.
- Build by composition: break the final UI into smaller components.
- Props: pass data and callbacks down into child components (example: `onSubmit={addTodo}`).
- State: store changing UI data (e.g., todo list, input value); treat state as immutable.
- Rendering lists: `todos.map(...)` and use stable `key` values (e.g., `todo.id`).
- Conditional UI: short-circuit render for "no todos" state.
- Component refactor: split App into `NewTodoForm`, `TodoList`, and `TodoItem`.
- Pass-through props: spread (`{...todo}`) can replace repeating `id={todo.id}` etc.
- Event handlers: wire checkbox toggles and delete buttons by passing functions down.
- Persistence: use `useEffect` to sync todos to `localStorage` when `todos` changes.
- Lazy init state: `useState(() => ...)` to read from `localStorage` only on first render.
- Hooks rule: call hooks at the top level (not inside conditionals/loops).

## Video Transcript (Archived)

- `content/06-video-transcript-Rh3tobg7hEo.md`
