import { Schema, model, models } from 'mongoose';

const DocumentSchema: Schema = new Schema({
    sender: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const DocumentModel = models.Document || model('Document', DocumentSchema);

export default DocumentModel