# Boilerplate NextJS + Prismic

This page covers how to use **Prismic + Next.js Boilerplate**.

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx degit tseil/boilerplate-nextjs-prismic your-project-name
cd your-project-name
npx @slicemachine/init
```

The commands will do the following:

1. Start a new Next.js project using this starter.
2. Ask you to log in to Prismic or [create an account][https://prismic.io/dashboard/signup].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

To learn more about working with Prismic, [**see the Prismic docs**](https://prismic.io/docs/technologies/nextjs).

### Edit the code

Here are some of the files in your project that you can edit:

- `prismicio.ts` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `app/\layout.tsx` - This is your layout component, which includes configuration for `@prismicio/next`.
- `app/page.tsx` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `app/[lang]/page.tsx` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `app/[lang]/[uid]/page.tsx` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `slices/\*/index.ts` - Each Slice in your project has an index.js file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `app/api/exit-preview/route.ts` - Do not edit or delete this file. This is the API endpoint to close a Prismic preview session.
- `app/api/preview/route.ts` - Do not edit or delete this file. This is the API endpoint to launch a Prismic preview session.
- `app/slice-simulator/page.ts` - Do not edit or delete this file. This file simulates your Slice components in development.
- `slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.js file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Styling in this project is implemented with Styled Components. See the [Styled Components docs](https://styled-components.com/docs) for more info.

### Deploy to the web

To put your project online, see [Deploy your Next.js App](https://prismic.io/docs/technologies/deploy-nextjs).

## Learn more

For the official Prismic documentation, see [Prismic's guide for Next.js](https://prismic.io/docs/technologies/nextjs) or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).
