export default {
    name: "assetCreationVideos",
    title: "Asset Creation Videos",
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