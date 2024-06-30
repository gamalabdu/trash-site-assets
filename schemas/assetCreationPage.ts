export default {
    name: "assetCreationPage",
    title: "Asset Creation Page",
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
            name: "artist",
            title: "Artist",
            type: "string"
        },
        {
            name: 'coverarts',
            title: 'Cover Arts',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: 'canvas',
            title: 'Canvas',
            type: 'array',
            of: [
                {
                    type: 'file',
                    options: {
                        accept: 'video/*',
                    },
                },
            ],
        },
        {
            name:"link",
            title:" Link",
            type: 'string',
        }
    ]

    
}