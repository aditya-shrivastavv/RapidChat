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

## Middleware

[`middleware.ts`](./middleware.ts)

- In nextjs you introduce a middleware in between by just creating a file named `middleware.ts`
- Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
- Use `withAuth` function provided by `next-auth/middleware` to protect the routes.
- We have to export a object named `config` with a field `matcher` which defines the routes at which the middleware should be applied.
- We are defining sensitive routes in a var `sensitiveRoutes` and determining if the user is accessing a sensitive route or not using `.some()` array method, which returns `true` if any of the elements in the array satisfies the provided testing function.
- Then we define the conditions for redirection based on the user's authentication status and the route they are trying to access.
- We use `NextResponse.next()` to pass the request to the next middleware in the stack.
- In the end we are defining callback function `async authorized()` which next-auth will call to check if the user is authenticated or not. (It's a next-auth specific function)
