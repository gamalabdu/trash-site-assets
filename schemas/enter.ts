export default {
    name: "enter",
    title: "Enter",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            
        },
        {
            name: "enterVideo",
            title: "Enter Video",
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }
    ]
}