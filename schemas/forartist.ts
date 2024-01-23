export default {
    name: "forartist",
    title: "For Artist",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: "for-artist-thumbnail",
            title: "For Artist Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "for-artist-video",
            title: "For Artist Video",
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }
    ]
}