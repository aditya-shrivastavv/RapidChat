# Documentation

- [Documentation](#documentation)
  - [Root page (`/`)](#root-page-)
  - [API](#api)
    - [Auth API](#auth-api)
    - [Friends API](#friends-api)
      - [Friend Request](#friend-request)
      - [Accept Friend](#accept-friend)
      - [Deny Friend](#deny-friend)
    - [Message API](#message-api)
  - [Auth pages](#auth-pages)
  - [Dashboard](#dashboard)
    - [Add page](#add-page)
    - [Chat page](#chat-page)
    - [Requests page](#requests-page)

## Root page (`/`)

- `layout.tsx` file is the main layout for the application. Every page is wrapped under this layout.
- I've just added a **Providers** for the application. Everything else is just barebone.
- The `page.tsx` contains component `Home` which is the main page for the application.
- There is nothing at our home page. It's just a blank page with **SignOut** button. Since it's protected route only authenticated users can access this page.
- Techincally the home page for a legit authenticated user is `/dashboard`.

## API

- In next.js, we can create an API route by creating a file in `app/api` directory.
- Our API contains 3 major routes:
  - `/api/auth/` - For authentication, fully handled by **next-auth**.
  - `/api/friends` - For managing friends of the user.
  - `/api/message` - For managing messages between friends.

### Auth API

- The auth API contains a `[...nextauth]` catch all route, because that's how **next-auth** works. It will be able to get all the URL params and query params which is required for authentication.
- It is the convention to use `route.ts` file for defining the routes and their handlers in Next.js.
- This file is mostly barebones which is just exposing the NextAuth handler for GET and POST requests.
- This handler uses `authOptions` which are imported from [`lib/auth`](../lib/auth.ts)
- `authOptions` define all of the configurations of next-auth. It's a simple object with all the required configurations.

### Friends API

- This part defines 3 major routes:
  - `/api/friends/add` - For sending friend requests.
  - `/api/friends/accept` - For accepting friend requests.
  - `/api/friends/deny` - For rejecting friend requests.
- In next.js for backend API to work properly, we need to export a component named as the methods of request type. For example for `POST` request we need to export a component named `POST`.

#### Friend Request

- Exposes a POST handler.
- First the body of the request is parsed using `req.json()`
- Validations --
  1. Check if the email is a valid email.
  2. Check if the user with that email exists in the database.
  3. Check if the user is not trying to add himself.
  4. Check if friend request is already sent to the user.
  5. Check if the user is not trying to add a friend who is already a friend.
- If all the validations pass, then we add the friend request to the database and trigger a notification to `pusherServer`.
- At places we can validate if the session is present or not. If not present, then the user is not authenticated to perform that action.

  ```ts
  const session = await getServerSession(authOptions)
    if (!session) {
      return new Response('Unauthorized', { status: 401 })
    }
  ```

#### Accept Friend

- Exposes a POST handler.
- First the body of the request is parsed using `req.json()`
- Validations --
  1. Check if the id is a valid id.
  2. Check if the user is logged in. If not then return unauthorized.
  3. Check if both the users are not already friends.
  4. Check if there is a friend request from the user. Without a friend request, the user cannot accept the friend.
- If all the validations pass, we fetch data of both users from the database using the ids.
- We add both users to each other's friend list.
- Trigger a notification to `pusherServer`.

#### Deny Friend

- Exposes a POST handler.
- First the body of the request is parsed using `req.json()`
- Validations --
  1. Check if the user is logged in. If not then return unauthorized.
  2. Check if the id is a valid id.
  3. Check if there is a friend request from the user. Without a friend request, the user cannot deny the friend.
- If all the validations pass, we delete the friend request from the database.
- We don't need to trigger a notification to `pusherServer` because the user is just denying the friend request. No UI updation is required at the friend request sender's end.

### Message API

- API route is `/api/message/send`
- Exposes a POST handler.
- The message text and `chatId` is extracted from the request body.
- Validations --
  1. Check if the user is logged in. If not then return unauthorized.
  2. Extract Ids of both users from the `chatId`. If the current user's id doesn't match with the any of the ids, then return unauthorized.
  3. Confirm that both users are friends. If not then return unauthorized.
- Construct the message object and validate it using `messageValidator`.
- Save the message to the database.
- Trigger a notification to `pusherServer`.

## Auth pages

- There is just a single page which is shown at `/login`
- Functions
  - `loginWithGoogle()`
    - Sets the loading state to true.
    - Calls the `signIn` function from `next-auth` with the provider as `google`.
    - Shows a toast if there is an error.
    - Finally sets the loading state to false.

## Dashboard

- Contains 4 pages
  - `/dashboard` - The main dashboard page. Recent chats and friends are shown here.
  - `/dashboard/add` - For adding friends.
  - `/dashboard/chat` - For chatting with friends.
  - `/dashboard/request` - For accepting or denying friend requests.

### Add page

- There is a `loading.tsx` page in all the paths (`add`, `chat`, `request`). Next.js automatically shows this page when the page is loading.
- The main page is mostly barebones which renders a `AddFriendForm` component.

### Chat page

- Contains a parameter `chatId` which is the id of the chat between the user and the friend in the URL.
- Chat id is obtained from the query params.
- If there is no session, then not found page is shown.
- Validations checks are done to ensure that only the user who is part of the chat can access the chat.
- Chat partner's data is fetched from the database using the id obtained from `chatId`.
- Messages are loading using function `getChatMessages()`.
- Functions
  - `getChatMessages()`
    - Fetches the chat messages between the user and the friend using the `chatId`.
    - Parses the response and sets the messages in the state.
    - Reverse the messages array to show the latest messages at the bottom.
    - Validates if the message data contains the required fields using validator `messageArrayValidator`.
    - Returns the messages array.
    - If there is an error, then it returns a not found page using nextjs's `notFound()` function.

### Requests page

- session is validated, if not found then not found page is shown.
- Ids of the friend who sent requests are fetched for the current user.
- Data about the users who sent the requests is fetched from the database using the ids.
- The page is rendered using the `FriendRequests` component.
