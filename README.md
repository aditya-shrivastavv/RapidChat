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

## Documentation

The full documentation for the project can be found under [`documentation`](./documentation/) directory.

But still I am going to explain the project structure overview here.

- `__tests__/` -- contains the test files for the application which is written in Jest and React Testing Library.
- `.devcontainer/` -- contains the devcontainer configuration for the project.
- `.github/` -- contains the GitHub actions configuration for the project.
- `.vscode/` -- contains small VSCode settings for the project.
- `documentation/` -- contains the full documentation for the project.
- `public/` -- contains the public assets for the project.
- `src/` -- contains the main source code for the project.
- `.dockerignore` -- contains the docker ignore file.
- `.eslintrc.json` -- contains the ESLint configuration for the project.
- `.gitignore` -- contains the git ignore file.
- `.prettierrc.json` -- contains the Prettier (code formatter) configuration for the project.
- `.prettierignore` -- contains the Prettier ignore file.
- `Dockerfile.dev` -- contains the Dockerfile for the development environment.
- `jest.config.js` -- contains the Jest configuration for the project.
- `next.config.js` -- contains the Next.js configuration for the project.
- `package.json` -- contains the npm package configuration for the project.
- `tailwind.config.js` -- contains the Tailwind CSS configuration for the project.
- `tsconfig.json` -- contains the TypeScript configuration for the project.

## Source Code Structure

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

## Installation

### Local Development

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

### Docker Dev Container

Assuming docker is installed on your machine, you can run the following command to start the development server in a docker container.

```bash
docker run -d -p 3000:3000 --env-file .env.local adityadocs/rapidchat
```

Also create `.env.local` file with the above mentioned environment variables before running the above command.
