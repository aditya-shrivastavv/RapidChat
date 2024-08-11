# RapidChat ✈️ - Realtime Chatting Application

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

## Source Code Structure 📝

The source code is structured under the `src` directory. The complete structure is defined in a separate README file under the `src` directory.
Check out the [source code structure](./src/) for more details.

For detailed documentation about every component, checkout [src/app](./src/app/)

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

## How realtime features are implemented? 🤔

- To implement the realtime features, we are using [Pusher Channels](https://pusher.com/docs/channels/getting_started/javascript/?ref=docs-index).
- Pusher channels is a managed real-time messaging service that enables you to add real-time features to your applications. It facilitates real-time communication between servers, apps and devices using **WebSockets** and HTTP, with fallback for devices that don't support WebSockets.
- *Installation*:

   ```bash
   npm install pusher pusher-js
   ```

- To use Pusher, you need to create an account on Pusher and create a new app. You will get the `app_id`, `key`, and `secret` which you need to use in your application.
- We create channels on the server side and trigger events on those channels. On the client side, we subscribe to those channels and listen for those events.
  - For example, when a new message is sent, first it gets stored in DB and then we trigger an event on the channel with the message data. All the clients who are subscribed to that channel will receive the message in real-time and the UI will be updated accordingly. NICE! 😎
- *Usage*:

   ```js
   import PusherServer from 'pusher'
   import PusherClient from 'pusher-js'

   export const pusherServer = new PusherServer({
     appId: process.env.PUSHER_APP_ID!,
     key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
     secret: process.env.PUSHER_APP_SECRET!,
     cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,',
     useTLS: true
   })

   export const pusherClient = new PusherClient(
     process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
     {
       cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!
     }
   )
   ```

   Now use `pusherServer` and `pusherClient` to trigger events and listen to events respectively.

   ```js
   // Trigger an event
   // -- -- -- -- --
   pusherServer.trigger('my-channel', 'my-event', {
     message: 'event triggered'
   })
   ```

   ```js
   // Subscribe to a channel
   // -- -- -- -- -- -- -- 
   pusherClient.subscribe('my-channel')
   pusherClient.bind('my-event', function(data) {
     alert('Received my-event with message: ' + data.message)
   })
   pusherClient.unsubscribe('my-channel')
   // You also need to unsubscribe from the channel when you are done listening to the events.
   // Using `useEffect` hook is a good way to manage the subscriptions and unsubscriptions.
   ```

- *Note*: Pusher is a paid service, but it provides a free tier which is more than enough for small projects.

## Installation ⬇️

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

### Docker Dev Container 🐋

Assuming docker is installed on your machine, you can run the following command to start the development server in a docker container.

```bash
docker run -d -p 3000:3000 --env-file .env.local adityadocs/rapidchat
```

Also create `.env.local` file with the above mentioned environment variables before running the above command.
