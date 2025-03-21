# Goals


With this backend, I want to be able to:
- Add a book in my library to the DB 
- Remove a book in my library
- Mark a book as read/unread
- Update the fields of the book as needed

A book should be associated with the following schema:
- Title (Required) - Books can have the same title 
- Author (Required) - Books can have many authors
- Genre (Optional) FK to BookGenre table mapping to Genre Table Books can have many genres
- Publishing Year (optional)
- Rating (int 1 through 5 stars)

