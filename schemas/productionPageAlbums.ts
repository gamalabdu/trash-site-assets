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
            name: "coverArt",
            title: "Cover Art",
            type: "file",
            options: {
                accept: 'image/*',
            },
        },
        {
            name:"link",
            title:" Link",
            type: 'string',
        }
    ]

    
}