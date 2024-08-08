# Documentation

- [Documentation](#documentation)
  - [Root page (`/`)](#root-page-)

## Root page (`/`)

- `layout.tsx` file is the main layout for the application. Every page is wrapped under this layout.
- I've just added a **Providers** for the application. Everything else is just barebone.
- The `page.tsx` contains component `Home` which is the main page for the application.
- There is nothing at our home page. It's just a blank page with **SignOut** button. Since it's protected route only authenticated users can access this page.
- Techincally the home page for a legit authenticated user is `/dashboard`.
