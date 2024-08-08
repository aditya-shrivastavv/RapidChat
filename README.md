# RapidChat - Realtime Chatting Application

YouTube Video Demo Here

RapidChat is a real-time chat application designed to provide a seamless and interactive communication platform. It leverages the power of several robust technologies including --

- Next.js
- Next Auth
- TypeScript
- Redis
- Tailwind CSS
- Pusher JS
- Zod
- Jest
- React Hook Form
- React Testing Library

The application is designed with a focus on real-time interactions, performance, and user experience. The project structure is well-organized, making it easy for developers to understand and contribute to.

Live Demo Here

## Project Structure

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

## Documentation

The full documentation for the project can be found under [`documentation`](./documentation/) directory.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/adityashrivastavv/RapidChat.git
   ```

2. Install the dependencies

   ```npm
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables

   ```txt
   # Any Random Thing
   NEXTAUTH
   NEXTAUTH_SECRET

   NEXTAUTH_URL

   # Redis - Database
   UPSTASH_REDIS_REST_URL
   UPSTASH_REDIS_REST_TOKEN

   # Google - OAuth
   GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET

   # Pusher - For Realtime
   PUSHER_APP_ID
   NEXT_PUBLIC_PUSHER_APP_KEY
   PUSHER_APP_SECRET
   ```

4. Start the development server

   ```bash
   pnpm dev
   ```
