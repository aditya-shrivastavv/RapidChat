# Source Code Structure

The source code is structured under the `src` directory. The `src` directory contains the following subdirectories:

- [`app`](./app/) - contains the main application code.
  - [`(auth)`](./app/(auth)/) - auth related routes container
    - [`login`](./app/(auth)/login/) - login page.
  - [`api`](./app/api/) - backend API.
    - [`auth`](./app/api/auth/) - authentication API.
      - [`[...nextauth]`](./app/api/auth/[...nextauth]/) - NextAuth API under catch all route segment.
    - [`friends`](./app/api/friends/) - friends API.
      - [`accept`](./app/api/friends/accept/) - accept friend request API.
      - [`add`](./app/api/friends/add/) - add friend API.
      - [`deny`](./app/api/friends/deny/) - deny friend request API.
    - [`message`](./app/api/message/) - message API.
      - [`send`](./app/api/message/send/) - send message API.
  - [`(dashboard)`](./app/(dashboard)/) - dashboard related routes container
    - [`dashboard`](./app/(dashboard)/) - dashboard page.
      - [`add`](./app/(dashboard)/dashboard/add) - add friend page.
      - [`chat`](./app/(dashboard)/dashboard/chat) - chating page.
      - [`request`](./app/(dashboard)/dashboard/requests) - friend requests page.
- [`components`](./components/) - contains reusable components.
  - [`ui`](./components/ui/) - contains UI components.
  - [`logo`](./components/logo/) - contains logo components.
- [`lib`](./lib/) - contains extra functions.
  - [`validations`](./lib/validations/) - contains zod validation functions.
- [`helpers`](./helpers/) - contains database helper functions.
- [`types`](./types/) - contains typescript types.
