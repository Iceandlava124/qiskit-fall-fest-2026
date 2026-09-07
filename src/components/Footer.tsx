export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Branding, Location & Disclaimer */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight">
              Qiskit Fall Fest <span className="text-quantum-purple">2026</span>
            </h3>
            <p className="text-sm font-medium text-slate-800">
              VIT Chennai × The QuantumPlators Club
            </p>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md">
              MG Auditorium, Vellore Institute of Technology, Vandalur-Kelambakkam Road, Keelakottaiyur, Chennai, Tamil Nadu 600127.
            </p>

            <div className="pt-3">
              <p className="text-[11px] text-slate-500 leading-relaxed font-mono max-w-md">
                Disclaimer: IBM/Qiskit participation and brand association are subject to official confirmation and Fall Fest brand guidelines.
              </p>
            </div>
          </div>

          {/* Column 2: Event Directory */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#about" className="hover:text-quantum-purple hover:underline transition-colors">About Event</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-quantum-purple hover:underline transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#attend" className="hover:text-quantum-purple hover:underline transition-colors">Who Can Attend</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-quantum-purple hover:underline transition-colors">3-Day Schedule</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-quantum-purple hover:underline transition-colors">Venue & Transit</a>
              </li>
              <li>
                <a href="#organizers" className="hover:text-quantum-purple hover:underline transition-colors">Organizers</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hackathon & Support */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Hackathon
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#hackathon" className="hover:text-quantum-purple hover:underline transition-colors">Challenge Tracks</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-quantum-purple hover:underline transition-colors">Mentors Lineup</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-quantum-purple hover:underline transition-colors">FAQs & OD Info</a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-quantum-purple hover:underline transition-colors">Partner With Us</a>
              </li>
              <li>
                <a href="#register" className="hover:text-quantum-purple hover:underline transition-colors font-medium">Register Spot</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Global Ecosystem */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Resources & Archive
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a
                  href="https://qiskit.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quantum-purple hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Qiskit SDK Docs</span>
                  <span className="text-quantum-purple text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://learning.quantum.ibm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quantum-purple hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>IBM Quantum Learning</span>
                  <span className="text-quantum-purple text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ibm-qff-25.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quantum-purple hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>2025 Edition Archive</span>
                  <span className="text-quantum-purple text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/qiskit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quantum-purple hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Qiskit GitHub</span>
                  <span className="text-quantum-purple text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chennaievents.vit.ac.in/technovit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quantum-purple hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>TechnoVIT Portal</span>
                  <span className="text-quantum-purple text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-xs font-mono text-slate-500">
          <p>© 2026 The QuantumPlators — VIT Chennai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
