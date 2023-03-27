import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongo } from '@lib/mongo/connect';
import DocumentModel from '@lib/models/document';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        connectMongo;

        switch (req.method) {
            case "GET":
                try {
                    const documents = await DocumentModel.find({});
                    res.status(200).json({ success: true, data: documents });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
                break;
            case "POST":
                try {
                    const document = await DocumentModel.create(req.body);
                    res.status(200).json({ success: true, data: document });
                } catch (error) {
                    res.status(400).json({ success: false, error });
                }
                break;
            default:
                res.status(400).json({ success: false });
            break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}