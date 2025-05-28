import { defineBlogConfig } from "./globals";

export default defineBlogConfig({
    tableOfContents: true,
    sharingProviders: ["bluesky", "clipboard", "native"],
    title: "Template blog",
    author: "Your name",
    site: "https://example.com",
    meta: [
        {
            name: "description",
            content: "This is a template blog"
        },
        {
            name: "fediverse:creator",
            content: "your fediverse handle"
        }
    ],
    links: {
        github: "https://github.com/yourusername",
        mastodon: "https://mastodon.social/@yourhandle",
        bluesky: "https://bsky.app/profile/yourhandle"
    }
});
