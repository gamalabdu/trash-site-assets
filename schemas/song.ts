export default {
    name: "song",
    title: "Song",
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
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "music",
            title: "Music",
            type: "file",
            options: {
                accept: 'audio/*', // Specify accepted file types for audio
            },
        }
        
    ]

    
}

