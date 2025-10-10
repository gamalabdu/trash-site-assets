
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
            name: "articleType",
            title: "Article Type",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Featured", value: "featured" },
                    { title: "New Release", value: "new-release" },
                    { title: "Review", value: "review" },
                    { title: "Interview", value: "interview" }
                ],
                layout: "checkboxes"
            }
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
                    name: "spotifyEmbed",
                    title: "Spotify Embed",
                    type: "object",
                    fields: [
                        {
                            name: "embedCode",
                            title: "Spotify Embed Code",
                            type: "text",
                            rows: 4,
                            description: "Paste the full iframe code from Spotify"
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
                },
                {
                    name: "photoBlock",
                    title: "Photo Block",
                    type: "object",
                    fields: [
                        {
                            name: "photos",
                            title: "Photos",
                            type: "array",
                            of: [
                                {
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
                                        },
                                        {
                                            name: "caption",
                                            title: "Caption",
                                            type: "string"
                                        }
                                    ]
                                }
                            ],
                            validation: (Rule: any) => Rule.required().min(1)
                        },
                        {
                            name: "layout",
                            title: "Layout",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Single", value: "single" },
                                    { title: "Side by Side", value: "sidebyside" },
                                    { title: "3 Column", value: "3column" }
                                ],
                                layout: "radio"
                            },
                            validation: (Rule: any) => Rule.required()
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