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
            name: "final",
            title: "Final Song",
            type: "file",
            options: {
                accept: 'audio/*',
            },
        },
        {
            name: "demo",
            title: "Demo Song",
            type: "file",
            options: {
                accept: 'audio/*',
            },
        }
        
    ]

    
}