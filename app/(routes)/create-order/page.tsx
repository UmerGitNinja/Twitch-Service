import useOrderMenu from "@/hooks/useOrderMenu";
import Navbar from "./components/navbar";
import Order from "./components/order";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function OrderPage({
  searchParams,
}: {
  searchParams: {
    Url: string;
    label: string;
    StreamerId: string;
    isLive: string
  };
}) {
  return (
    <main className={`flex flex-col ${poppins.className}`}>
      <Navbar />
      <Order
        image={searchParams.Url}
        streamerName={searchParams.label}
        StreamerId={searchParams.StreamerId}
        isLive={searchParams.isLive}
      />
    </main>
  );
}