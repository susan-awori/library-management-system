# library-management-system
## Schema Decisions

Book references Genre through a `genreId` foreign key instead of embedding genre data inside each book:

- **No duplication:** A genre name is stored once, not copied across hundreds of books.
- **Easy updates:** Renaming a genre changes one row, and every book reflects it.
- **Consistency:** The database enforces that a book can only point to a genre that exists.
- **Flexible queries:** We can easily ask "show all books in Mystery" or "how many books per genre?"