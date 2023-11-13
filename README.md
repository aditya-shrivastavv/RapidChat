# Documentation - RapidChat

[Live →](https://rapid-chat-one.vercel.app)

RapidChat is a real-time chat application designed to provide a seamless and interactive communication platform. It leverages the power of several robust technologies including React Hook Form, Redis, Next.js, Next Auth, Pusher JS, Zod, Jest, React Testing Library, Tailwind CSS, and TypeScript. The application is designed with a focus on real-time interactions, performance, and user experience. The project structure is well-organized, making it easy for developers to understand and contribute to. You can check out the live version of the application [here](https://rapid-chat-one.vercel.app).

## Tech Stack

1. **Next JS**
   Next.js is a React framework that provides a production-ready setup for building React applications. It provides several features out of the box, including server-side rendering, file-based routing, and API routes.
2. **Redis**
   Redis, an in-memory data structure store, to store and retrieve data quickly. Here we use Redis to store the user's friends and their messages.
3. **Next Auth**
   Next Auth is a library for handling authentication in Next.js applications. It provides a simple API for handling authentication with several providers, including Google, Facebook, Twitter, and GitHub.
4. **Typescript**
   TypeScript is a superset of JavaScript that provides static typing and other features to JavaScript.
5. **Tailwindcss**
   Tailwindcss is a utility-first CSS framework.
6. **Pusher JS**
   Pusher JS is a library for handling real-time communication in web applications. It provides an API for subscribing to channels and listening to events.
7. **React hook form**
   React Hook Forms is a lightweight library for managing forms in React applications.
   It provides a simple and intuitive API for handling form inputs and validation.
8. **Zod**
   Zod is a TypeScript-first schema validation library. It provides a simple API for validating data against a schema.
9. **Jest**
   Jest is a JavaScript testing framework.
10. **React Testing Library**
    React Testing Library is a library for testing React components.

## Project Structure

```bash
│   middleware.ts
├───app
│   │   favicon.ico
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │
│   ├───(auth)
│   │   └───login
│   │           page.tsx
│   │
│   ├───(dashboard)
│   │   └───dashboard
│   │       │   layout.tsx
│   │       │   page.tsx
│   │       │
│   │       ├───add
│   │       │       loading.tsx
│   │       │       page.tsx
│   │       │
│   │       ├───chat
│   │       │   └───[chatId]
│   │       │           loading.tsx
│   │       │           page.tsx
│   │       │
│   │       └───requests
│   │               loading.tsx
│   │               page.tsx
│   │
│   └───api
│       ├───auth
│       │   └───[...nextauth]
│       │           route.ts
│       │
│       ├───friends
│       │   ├───accept
│       │   │       route.ts
│       │   │
│       │   ├───add
│       │   │       route.ts
│       │   │
│       │   └───deny
│       │           route.ts
│       │
│       └───message
│           └───send
│                   route.ts
│
├───components
│   │   AddFriendForm.tsx
│   │   ChatInput.tsx
│   │   FriendRequests.tsx
│   │   FriendRequestSidebarOptions.tsx
│   │   Messages.tsx
│   │   MobileChatLayout.tsx
│   │   Providers.tsx
│   │   SidebarChatList.tsx
│   │   SignOutButton.tsx
│   │   UnseenChatToast.tsx
│   │
│   ├───logo
│   │       GoogleLogo.tsx
│   │       Icons.tsx
│   │
│   └───ui
│           Button.tsx
│
├───helpers
│       get-friends-by-user-id.ts
│       redis.ts
│
├───lib
│   │   auth.ts
│   │   db.ts
│   │   pusher.ts
│   │   utils.ts
│   │
│   └───validations
│           add-friend.ts
│           message.ts
│
└───types
        db.d.ts
        next-auth.d.ts
        pusher.d.ts
        typings.d.ts
```

The Documentation for each file can be found in the file itself.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/adityashrivastavv/RapidChat.git
   ```

2. Install the dependencies

   ```bash
   pnpm install
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

## License

[MIT](https://choosealicense.com/licenses/mit/)
