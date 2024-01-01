import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const Orders = await prismadb.order.findMany();

        return NextResponse.json(Orders)
    } catch (error) {
        console.log("[ORDER GET]",error)
        return new NextResponse("Something went wrong", {status: 400})
    }
}