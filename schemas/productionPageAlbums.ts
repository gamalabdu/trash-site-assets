export default {
    name: "productionPageAlbums",
    title: "Production Page Album Covers",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "artist",
            title: "Artist",
            type: "string"
        },
        {
            name: "final",
            title: "Final Song",
            type: "file",
            options: {
                accept: 'image/*',
            },
        },
    ]

    
}