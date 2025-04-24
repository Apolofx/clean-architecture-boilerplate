# Clean Architecture Boilerplate for Node.js

This is a Clean Architecture boilerplate for Node.js projects written in TypeScript. It provides a structured foundation for building scalable and maintainable applications. The project uses **Express** for the web framework, **SQLite** as the database, and **Vitest** for testing.

## Features

- **Clean Architecture**: Separation of concerns with clear boundaries between layers (Domain, Application, Infrastructure, and Interfaces).
- **TypeScript**: Strongly typed code for better maintainability and developer experience.
- **SQLite**: Lightweight and easy-to-use database for development and testing.
- **Vitest**: Fast and modern testing framework for unit and integration tests.

## Project Structure

```
src/
├── application/         # Application layer (use cases)
├── domain/              # Domain layer (entities and repositories)
├── infrastructure/      # Infrastructure layer (controllers, routes, database, etc.)
├── interfaces/          # Interfaces layer (DTOs, API contracts)
├── tests/               # Test files for all layers
└── index.ts             # Entry point of the application
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TypeScript

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/apolofx/clean-architecture-boilerplate.git
   cd clean-architecture-boilerplate
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run build && npm run start
   ```

4. **Run tests**:

   ```bash
   npm test
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

## API Endpoints

### `GET /users/:id`

- **Description**: Fetch a user by ID.
- **Response**:
  - `200 OK`: Returns the user data.
  - `404 Not Found`: If the user does not exist.

## Development

Development server uses [tsx](https://tsx.is/) for running TS files directly.
To run development server:

```bash
npm run dev
```

## Testing

The project uses **Vitest** for testing. Test files are located in the `src/tests` directory and cover all layers of the application.

To run the tests:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
