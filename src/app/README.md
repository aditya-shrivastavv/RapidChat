# Documentation

- [Documentation](#documentation)
  - [Root page (`/`)](#root-page-)
  - [API](#api)
    - [Auth API](#auth-api)
    - [Friends API](#friends-api)
      - [Add Friend](#add-friend)
      - [Accept Friend](#accept-friend)
      - [Deny Friend](#deny-friend)
    - [Message API](#message-api)

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

#### Add Friend

- Exposes a POST handler which is used to send friend requests.

#### Accept Friend

#### Deny Friend

### Message API
