export default {
    name: "productionPage",
    title: "Production Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "id",
            title: "ID",
            type: "number"
        },
        {
            name: "artist",
            title: "Artist",
            type: "string"
        },
        {
            name: "music",
            title: "Music",
            type: "file",
            options: {
                accept: 'audio/*',
            },
        }
        
    ]

    
}