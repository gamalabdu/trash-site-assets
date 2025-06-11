export default {
    name: "pitchPacket",
    title: "Pitch Packet",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },

        {
            name: "pdfFile",
            title: "PDF File",
            type: "file",
            options: {
                accept: "application/pdf"
            }
        }
    ]
}

