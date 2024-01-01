import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
        OrderTotal,
        PlayValue,
        SaveValue,
        FollowerValue,
        ListenerValue,
        ArtistName,
        Email,
        checkedSongs
    } = body;

    if (
      OrderTotal === 0 ||
      SaveValue === 0 ||
      FollowerValue === 0 ||
      ListenerValue === 0 ||
      PlayValue === 0
    ) {
      return new NextResponse("All values should be non-zero", { status: 400 });
    }

    const Order = await prismadb.order.create({
      data: {
        PlaysValue: PlayValue,
        Saves: SaveValue,
        Follower: FollowerValue,
        MonthlyListeners: ListenerValue,
        ArtistName: ArtistName,
        Email,
        Song: checkedSongs
      },
    });
    return NextResponse.json(Order);
  } catch (error) {
    console.error("Error processing order:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
