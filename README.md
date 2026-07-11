# Next Blog App

Next Blog App is a full-stack blog platform built with Next.js, React, MongoDB, and Tailwind CSS. It includes a public-facing blog feed, detailed blog pages, an email subscription form, and an admin dashboard for managing blog posts and subscribers.

## Features

- Public blog feed with category filtering for All, Technology, Startup, and Lifestyle.
- Blog detail pages loaded by dynamic route.
- Email subscription form with toast feedback.
- Admin dashboard for creating, listing, and deleting blog posts.
- Subscriber management screen for viewing and removing email subscriptions.
- MongoDB-backed API routes for blogs and email subscriptions.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- MongoDB with Mongoose
- Tailwind CSS 4
- Axios for client-side data fetching
- React Toastify for notifications

## Project Structure

```text
app/
  page.js                    Public homepage
  blogs/[id]/page.jsx        Blog detail page
  admin/                     Admin dashboard and management pages
  api/blog/route.js          Blog CRUD API
  api/email/route.js         Subscription API
components/                  Shared UI components
components/AdminComponents/  Admin table and sidebar components
lib/config/db.js             MongoDB connection
lib/models/                  Mongoose models for blogs and emails
assets/                      Images, icons, and sample blog data
public/                      Uploaded blog images
```

## Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun
- A MongoDB database, preferably MongoDB Atlas

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure the MongoDB connection in [lib/config/db.js](lib/config/db.js).

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Routes

- `/` - homepage with the latest blogs and subscription form
- `/blogs/[id]` - individual blog post page
- `/admin` - admin shell
- `/admin/addProduct` - create a new blog post
- `/admin/blogList` - view and delete blog posts
- `/admin/subscriptions` - view and delete email subscribers

## API Endpoints

### `GET /api/blog`
Returns all blog posts.

### `GET /api/blog?id=<blogId>`
Returns a single blog post by MongoDB id.

### `POST /api/blog`
Creates a new blog post. Expects multipart form data with:

- `title`
- `description`
- `category`
- `author`
- `authorImg`
- `image`

### `DELETE /api/blog?id=<blogId>`
Deletes a blog post and removes the uploaded image from `public/`.

### `GET /api/email`
Returns all subscriber emails.

### `POST /api/email`
Stores a new email subscription. Expects multipart form data with:

- `email`

### `DELETE /api/email?id=<subscriberId>`
Deletes a subscriber entry.

## Notes

- Uploaded blog images are written to the `public/` directory so they can be served directly by Next.js.
- The blog cards render only a preview of the description, while the detail page renders the full HTML content.
- The current UI uses a bold, bordered visual style with Tailwind utility classes.

## Deployment

The app can be deployed like any standard Next.js application. Make sure the production environment has access to the same MongoDB database and that the connection string in [lib/config/db.js](lib/config/db.js) is updated for the target environment.
