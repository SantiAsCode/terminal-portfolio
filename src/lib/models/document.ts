import { Schema, model, models } from 'mongoose';

const DocumentSchema: Schema = new Schema({
    user_email: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
    erasable: {
        type: Boolean,
        required: true,
    }
});

const DocumentModel = models.Document || model('Document', DocumentSchema);

export default DocumentModel