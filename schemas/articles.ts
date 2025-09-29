
export default {
    name: "articles",
    title: "Articles",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Article Title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string"
        },
        {
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    description: "Important for SEO and accessibility"
                }
            ]
        },
        {
            name: "categoryTags",
            title: "Category Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            }
        },
        {
            name: "authorName",
            title: "Author Name",
            type: "string"
        },
        {
            name: "authorRole",
            title: "Author Role",
            type: "string"
        },
        {
            name: "authorImage",
            title: "Author Profile Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "authorSocialLinks",
            title: "Author Social Links",
            type: "array",
            of: [{ type: "url" }]
        },
        {
            name: "publishedDate",
            title: "Published Date",
            type: "datetime",
            options: {
                dateFormat: "MMMM DD, YYYY"
            }
        },
        {
            name: "content",
            title: "Article Content",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "Quote", value: "blockquote" }
                    ],
                    marks: {
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" }
                        ],
                        annotations: [
                            {
                                title: "URL",
                                name: "link",
                                type: "object",
                                fields: [
                                    {
                                        title: "URL",
                                        name: "href",
                                        type: "url"
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "spotifyLink",
                    title: "Spotify Link",
                    type: "object",
                    fields: [
                        {
                            name: "url",
                            title: "Spotify URL",
                            type: "url"
                        }
                    ]
                },
                {
                    name: "pullQuote",
                    title: "Pull Quote",
                    type: "object",
                    fields: [
                        {
                            name: "text",
                            title: "Quote Text",
                            type: "text"
                        }
                    ]
                }
            ]
        },
        {
            name: "externalLinks",
            title: "External Links",
            type: "array",
            of: [{ type: "url" }]
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            }
        },
        {
            name: "shareCount",
            title: "Share Count",
            type: "number"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            rows: 3
        },
        {
            name: "keywords",
            title: "Keywords",
            type: "array",
            of: [{ type: "string" }]
        }
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            media: "heroImage"
        },
        prepare(selection: any) {
            const { title, subtitle, media } = selection;
            return {
                title: title,
                subtitle: subtitle,
                media: media
            };
        }
    }
}