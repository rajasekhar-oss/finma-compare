  import { Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const Booking = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071C33] px-4 py-10 md:py-16">
      {/* Background decoration */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#C7A45A]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <section className="relative mx-auto max-w-4xl">
        <header className="mb-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C7A45A]">
            <Calendar className="h-6 w-6 text-[#071C33]" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl">
            Book a Free Consultation
          </h1>

          <p className="mt-2 text-sm text-white/70">
            30 minutes with a senior partner — no obligation.
          </p>
        </header>

       <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
  <iframe
    src={BOOKING_URL}
    title="Book a FINMA consultation"
    className="block h-[520px] w-full border-0 bg-white md:h-[540px]"
    allow="camera; microphone; autoplay; encrypted-media; fullscreen; payment"
  />
</div>
      </section>
    </main>
  );
};

export default Booking;