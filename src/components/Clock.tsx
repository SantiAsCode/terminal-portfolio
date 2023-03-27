'use client';
import { useEffect, useState } from "react"

function upperFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function dateString(fullDate: Date) {
    const date = upperFirst(fullDate.toLocaleDateString(undefined, { weekday: 'short'}));
    return date+". "+fullDate.toLocaleTimeString(undefined, { hour12: true, hour: '2-digit', minute: '2-digit' });
}

export default function Clock() {
    const [ dateTime, setDateTime ] = useState<string>(dateString(new Date()));

    useEffect(() =>{
        setInterval(() => {
            setDateTime(dateString(new Date()))
        }, 1000)
    }, [])
    return (
        <div className="mx-2">
            { dateTime }
        </div>
    )
}
