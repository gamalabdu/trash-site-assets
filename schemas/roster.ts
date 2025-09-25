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
            name: "artistImage",
            title: "Artist Image",
            type: "file",
            options: {
                accept: 'image/*',
            },
        },
    ]

    
}