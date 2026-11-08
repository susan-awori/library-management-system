# Library Management System

A simple Prisma-based project for managing a small library catalog. It includes users, genres, books, and review records, with a SQLite database for local development.

## Project purpose

This project models a library where:

- users can be patrons or librarians
- books belong to a single genre
- genres can be reused across many books
- users can leave reviews on books

## Tech stack

- Node.js
- TypeScript
- Prisma ORM
- SQLite

## Prisma schema overview

The database design keeps book and genre data normalized:

- `Genre` stores the shared genre information once
- `Book` stores a `genreId` foreign key instead of duplicating the genre name
- `Review` links a user to a book and stores a rating/comment
- `User` stores account data and role information

## Why the schema uses a foreign key for genre

Using `genreId` instead of embedding genre data in each book is better because:

- **No duplication:** the genre name is stored once instead of repeated across many books
- **Easier maintenance:** changing a genre name updates one record only
- **Data integrity:** the database guarantees that a book’s genre must exist
- **Better querying:** it is easy to fetch all books in a genre or count books per category

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create and sync the database:
   ```bash
   npx prisma db push
   ```

3. Run the seed script to insert initial genre and book data:
   ```bash
   npm run seed
   ```

## Useful commands

```bash
npx prisma validate
npx prisma studio
npx prisma generate
```

## Notes

The project uses a SQLite database configured in `.env` via `DATABASE_URL="file:./dev.db"`.