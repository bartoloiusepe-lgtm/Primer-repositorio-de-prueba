import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'the-grid-web',
    version: '0.8.1',
    timestamp: new Date().toISOString(),
  })
}
