# ts-b-form

A minimal React + TypeScript project demonstrating form handling and state management with a todo application.

## Features

- **TypeScript Implementation**:
  - Strict type definitions for todos, context, and components
  - Custom `Todo` class with TypeScript constructor
  - Generic `React.FC` component typing
  - Context API with fully typed context object

- **State Management**:
  - React Context API for global state
  - Type-safe context creation with `React.createContext<T>`
  - Custom provider component with typed state and handlers

- **Form Handling**:
  - Controlled form submission with `useRef` hook
  - Input validation with TypeScript type guards
  - Proper event typing (`React.FormEvent`)

- **Component Structure**:
  - Presentational components (`TodoItem`, `Todos`)
  - Container components (`NewTodo`)
  - Provider wrapper pattern (`TodosContextProvider`)

## Technical Highlights

- **Type Safety**: Full end-to-end TypeScript coverage from models to UI
- **Clean Architecture**: Separation of concerns with models, context, and components
- **Modern React**: Functional components with hooks (`useState`, `useContext`, `useRef`)
- **Efficient State Updates**: Immutable state updates using functional `setState`
