export default {
    name: "roster",
    title: "Roster",
    type: "document",
    fields: [
        {
            name: "artistName",
            title: "Artist Name",
            type: "string"
        },
        {
            name: "artistSocials",
            title: "Artist Socials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "link",
                            title: "Link",
                            type: "string"
                        },
                        {
                            name: "type",
                            title: "Type",
                            type: "string"
                        }
                    ]
                }
            ]
        },
        {
            name: "artistBio",
            title: "Artist Bio",
            type: "string"
        },
        {
            name: "artistImage",
            title: "Artist Image",
            type: "file",
            options: {
                accept: 'image/*',
            },
        },
    ]

    
}