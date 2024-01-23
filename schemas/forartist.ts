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
            name: "forArtistThumbnail",
            title: "For Artist Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "forArtistVideo",
            title: "For Artist Video",
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }
    ]
}