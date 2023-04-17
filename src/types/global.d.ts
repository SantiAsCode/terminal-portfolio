import { Mongoose } from 'mongoose';
export {};

declare global {
    var mongoose: {
        conn: Mongoose | null;
        // promise: Promise<Mongoose> | null;
    };
    var locale: string | null;
}

/* eslint-disable no-var */
