import { match } from 'assert';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {

    const url = req.nextUrl.clone();
    if (url.pathname.startsWith('/_next') || url.pathname.includes('/api/') || PUBLIC_FILE.test(url.pathname)) return;
    if (url.pathname.match(/^(\/(es|en|pt))/)) return;
    return NextResponse.redirect(new URL(`/es/${url.pathname}`, req.url));
}