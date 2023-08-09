import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "@app/loading";

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
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

export default TicketsPage;
