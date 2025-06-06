# Nuxt Blog Template

This is a simple Nuxt.js blog template.

See it live at [https://finxol.io](https://finxol.io).

## Features

- ✏️ Easy Markdown post authoring
- 🖌️ Clean minimal style for easy reading
- 🚀 Deploy anywhere!
- 🎨 Easily customisable
- 🌐 Automatic OpenGraph image generation
- 🖨️ Adapted styles for printing (try printing a post in the demo)

## Getting started

Make sure to install dependencies:

```bash
pnpm install
```

### Configure

The config file is `blog.config.ts`.
It should already contain all the possible configuration options.

The favicon and logo used throughout the blog is the `assets/logo.png` file.
You can change it to your own logo by replacing it with your own logo.

### Write!

All your posts need to live inside the `content/posts` directory.
The files will be automatically picked up by Nuxt, and the file names will become the post urls.

Check out the [Nuxt Content documentation](https://content.nuxt.com/docs/files/markdown) for more info.

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on production deployment.
