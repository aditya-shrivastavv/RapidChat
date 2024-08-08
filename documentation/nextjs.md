# Next.JS

## Project Initialization

Build project structure:

```bash
npx create-next-app@13.5.0 chat-app
```

Start the development server:

```bash
cd chat-app
npm run dev
```

## Routing

Next.js uses the directory structure to determine the routes.

- It start from `/app` directory
- The file `page.tsx` follows a naming convention and is responsible for the index page at that particular route.
- Any folder inside the `/app` directory will be considered as a route. The file `page.tsx` inside that folder will be it's index page. Means it will get rendered when the route is hit.

### Naming system

- `page.tsx` - Index page for the route