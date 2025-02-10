import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/prisma/prisma'


//общеждоступная API
export async function GET(request: NextRequest){
    // console.log('request=', request);
    return NextResponse.json(
        await prisma.group.findMany()
    );
    
}