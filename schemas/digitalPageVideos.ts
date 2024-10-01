export default {
    name: "digitalPageVideos",
    title: "Digital Page Videos",
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
            name: "assetVideo",
            title: "Asset Video",
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }
    ]

    
}