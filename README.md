# Blog Application

A simple and elegant blog application built with Node.js and Express, allowing users to create, read, update, and delete blog posts.

## Features

- **View All Posts** - Browse all published blog posts on the home page
- **Create Posts** - Write and publish new blog posts with title, content, and author information
- **Edit Posts** - Update existing posts to modify content
- **Delete Posts** - Remove posts you no longer want to display
- **Read Full Posts** - Click on any post to view its complete content
- **Clean UI** - Responsive and user-friendly interface with EJS templating

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **Templating**: [EJS](https://ejs.co/) (Embedded JavaScript templating)
- **Styling**: CSS
- **Port**: 3000

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deep084-bot/Blog.git
   cd Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   or
   ```bash
   node index.js
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
.
├── index.js              # Main server file
├── package.json          # Project dependencies
├── routes/
│   └── postRoutes.js     # All route handlers
├── views/
│   ├── index.ejs         # Home page - list all posts
│   ├── create.ejs        # Create new post page
│   ├── edit.ejs          # Edit post page
│   ├── post.ejs          # View single post page
│   └── partials/
│       ├── header.ejs    # Header component
│       └── footer.ejs    # Footer component
├── public/
│   └── style/
│       └── main.css      # Styling
├── project images        # Images of project
└── README.md             # This file
```

## API Routes

### GET Routes
- `GET /` - Display all blog posts
- `GET /create` - Show create post form
- `GET /edit/:id` - Show edit form for a specific post
- `GET /post/:id` - Display a single post

### POST Routes
- `POST /create` - Create a new blog post
- `POST /edit/:id` - Update an existing post
- `POST /delete/:id` - Delete a post

## Usage

1. **View Posts**: Visit the home page to see all blog posts
2. **Create a Post**: Click on "Create Post", fill in the title, content, and author name, then submit
3. **Edit a Post**: Click the edit button on any post, modify the content, and save
4. **Delete a Post**: Click the delete button to remove a post
5. **View Full Post**: Click on any post title to read the complete content

## Sample Data

The application comes with three sample blog posts:
- The Rise of Decentralized Finance
- The Impact of Artificial Intelligence on Modern Businesses
- Sustainable Living: Tips for an Eco-Friendly Lifestyle

## Dependencies

- **express** (^5.2.1) - Web server framework
- **ejs** (^5.0.1) - Templating engine
- **body-parser** - Middleware for parsing form data

## License

ISC

## Author

Deep084-bot