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
        options: { hotspot: true },
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
        options: { layout: "tags" }
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
        options: { hotspot: true }
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
        options: { dateFormat: "MMMM DD, YYYY" }
      },
  
      /**
       *  ✅ Single Tiptap JSON field replaces blocks
       */
      {
        name: "contentJson",
        title: "Article Content",
        type: "json",
        validation: (Rule: any) => Rule.required(),
        description: "Tiptap JSON document representing the full article body."
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
        options: { layout: "tags" }
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
      prepare({ title, subtitle, media }: any) {
        return { title, subtitle, media };
      }
    }
  };
  