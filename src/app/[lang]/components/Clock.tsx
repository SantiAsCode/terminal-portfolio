'use client';
import { useEffect, useState } from "react"
import { dateString } from "@helpers/helpers";

export default function Clock({ locale }: { locale: string }) {

    const [ dateTime, setDateTime ] = useState<string>(dateString(new Date(), locale));

    useEffect(() => {
        setInterval(() => {
            setDateTime(dateString(new Date(), locale))
        }, 1000)
    }, []);

    return (
        <div className="mx-2">
            { dateTime }
        </div>
    );
}
