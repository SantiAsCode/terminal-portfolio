export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function dateString(fullDate: Date, lang: string) {
    const date = capitalizeFirstLetter(fullDate.toLocaleDateString(lang, { weekday: 'short'}));
    return date+" "+fullDate.toLocaleTimeString(lang, { hour12: true, hour: '2-digit', minute: '2-digit' });
}