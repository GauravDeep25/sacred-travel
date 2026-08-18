import { Send } from 'lucide-react';

export default function EnquiryForm() {
  return (
    <section className="py-24 px-6 bg-white border-t border-dark/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] block mb-2">enquire</span>
          <h2 className="text-4xl font-serif text-dark mb-4">Begin your journey</h2>
          <p className="text-charcoal/50">[SUPPORTING TEXT LINE]</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <input type="text" placeholder="Full Name" className="form-underline" />
          <input type="email" placeholder="Email Address" className="form-underline" />
          <input type="text" placeholder="Destination Interest" className="form-underline md:col-span-2" />
          <textarea placeholder="Message" rows="4" className="form-underline md:col-span-2"></textarea>
          <button className="md:col-span-1 bg-primary text-white py-5 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-dark transition-all">
            Send Enquiry <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}