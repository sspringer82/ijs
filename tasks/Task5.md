# Task 5

Create a new Component /app/books/form/page.tsx named BooksFormPage containing a Form to create a new book.

Create a new Server Function called createBook that talks to the actual Backend and saves the data via a POST request.
revalidate the Path `/books` and redirect to `/books`

Handle the form submission with `useActionState`. The state is a simple string representing the error. As a function, pass the createBook Server Function. The inital State is an empty string.