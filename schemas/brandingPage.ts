export default {
    name: "brandingPage",
    title: "Branding Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: 'videos',
            title: 'Videos',
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
    ]

    
}