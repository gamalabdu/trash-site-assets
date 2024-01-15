export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'statement',
            title: 'Statement',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'type',
            title: 'Type',
            type: 'array',
            of: [{ type: 'string' }],
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
        {
            name: 'images',
            title: 'Images',
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
            of: [{ type: 'string' }],
        },
        {
            name: 'assets',
            title: 'Assets',
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
            name: 'iphone',
            title: 'iPhone',
            type: 'boolean',
        },
        {
            name: 'artworks',
            title: 'Artworks',
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
    ],
}



