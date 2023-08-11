import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "@app/loading";
import Link from "next/link";
export const metadata = {
  title: "RiIsBi Helpdesk | Tickets",
};

function TicketsPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">Create Ticket</button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

export default TicketsPage;
