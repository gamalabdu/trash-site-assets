export default {
    name: "outreachAssets",
    title: "Outreach Page Assets",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "subtitle",
            title: "Sub-Title",
            type: "string"
        },
        {
            name: "assetImage",
            title: "Asset Image",
            type: "file",
            options: {
                accept: 'image/*',
            },
        },
    ]
    
}