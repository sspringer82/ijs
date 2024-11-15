# Task 2: Create a detail page for the books

- Create a new page component `app/books/[id]/page.tsx`
- The component should be named `BookDetailPage`
- Access the variable in the URL path via the `params.id` prop of the component function. Take care of the `params` promise and use the correct type.
- Fetch the data for the book and show the content
- Go to the List component and add a `Link` component to every list entry to enable navigating to the details view (Hint: use the `href` prop)
- **Bonus**: Use Material UI and/or Tailwind to make it look good
- **Bonus**: Add a link from the details page back to the list
- **Bonus**: Put the data fetching function into a separate file `/api/books.api.ts`
- **Bonus**: Take care of errors and display an appropriate message
