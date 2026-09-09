import { NextResponse } from 'next/server'
export async function GET(){return NextResponse.json({ok:true,service:'the-grid-web',version:'0.8.0',timestamp:new Date().toISOString()})}