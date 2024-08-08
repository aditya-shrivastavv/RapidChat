# RapidChat

[fast gif](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW9tOXI5YnphbTc3Mm5ndDM5dWswcmQ1aW92emV1MHNrbnM1Ym83NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjbNil0GeIWcy9T2uw/giphy.webp)

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
├───app
│   ├───(auth)
│   │   └───login
│   ├───(dashboard)
│   │   └───dashboard
│   │       ├───add
│   │       ├───chat
│   │       │   └───[chatId]
│   │       └───requests
│   └───api
│       ├───auth
│       │   └───[...nextauth]
│       ├───friends
│       │   ├───accept
│       │   ├───add
│       │   └───deny
│       └───message
│           └───send
├───components
│   ├───logo
│   └───ui
├───helpers
├───lib
│   └───validations
└───types
```

## Documentation

### Authentication

The whole authentication part is handled by NextAuth. NextAuth is initialized in the app by adding a route through nextJs `/api/auth/[...nextauth]/route.ts` in the `app` folder. the `[...nextauth]` is a dynamic catch all route segment which catches parameters passed after `/api/auth/` so that it can be used in the `route.ts` file.

In `route.ts` file a route handler is exposed as **GET** and **POST** after configuring with the required options. The options are passed as an object to the `NextAuth` function. The options object contains the following properties:

- `adapter`: The adapter is used to connect to the database. Here we use the `UpstashRedisAdapter` to connect to the database. The `UpstashRedisAdapter` is initialized by passing the `RedisDB` instance to it.
- `session`: The session object is used to configure the session. Here we define the strategy as `jwt`.
- `providers`: The providers object is used to configure the authentication providers. Here we define the providers as `Google`.
- `pages`: The pages object is used to configure the authentication pages. Here we define the page `signIn` as `/login`.
- `secret`: Secret is used to configure the secret used to encrypt the JWT token.
- `callbacks`: The callbacks object is used to configure the callbacks. Here we define the async function`jwt` which is used to configure the JWT token and the async function `session` which is used to configure the session. Finally a `redirect()` function is returned which is used to redirect the user to the dashboard page after successful authentication.

### Send and Accept Friend Requests

### Realtime Chat

### Testing

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
