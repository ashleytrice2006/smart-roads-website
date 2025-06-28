import React from 'react';
import bgImage from '../assets/nz-auth-bg-perfect.png';
import conesBg from '../assets/Darkcones.png';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative text-center px-4 py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto text-white animate-fade-in">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg w-full text-gray-900">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-smartOrange">
              Smart Roads. Smart Teams. Safer Worksites.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Built for NZGTTM compliance, Smart Roads captures on-site staff reports and photos, vehicle pre-checks — all synced to your dashboard for real-time feedback, training, and audit-ready evidence.
              <br />
              <strong>Boost safety. Prove competency. Win more work.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/login"
                className="px-6 py-3 bg-white border border-smartOrange text-smartOrange rounded hover:bg-orange-50 font-medium transition hover:shadow-lg"
              >
                Dashboard Login
              </a>
              <a
                href="/signup"
                className="px-6 py-3 bg-smartOrange text-white rounded hover:bg-orange-700 font-medium transition hover:shadow-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-white py-20 px-6 md:px-12" id="smart-features">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Smart Roads?
          </h2>
          <p className="text-lg text-gray-600">
            Streamline reporting, prove compliance, and win more work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: '📷',
              title: 'On-Site Staff Reports',
              desc: 'Capture risk-based reports with photos. Admins give feedback that improves staff training in real time.',
            },
            {
              icon: '🛠️',
              title: 'Vehicle Pre-Checks',
              desc: 'Staff complete vehicle pre-checks directly in the app. Track WOF, RUC, service dates, and issues. Upload photos for every traffic management vehicle.',
            },
            {
              icon: '⚡',
              title: 'Instant Admin Feedback',
              desc: 'Reports are reviewed by admins and sent back to staff with comments. Instant coaching at every job.',
            },
            {
              icon: '📦',
              title: 'Tender Pack Generator',
              desc: 'Export staff profiles, qualifications, and performance data — perfect for client proposals.',
            },
            {
              icon: '📁',
              title: 'Company Document Vault',
              desc: 'Store insurance, health & safety, compliance docs, and more — all searchable and expiry-tracked.',
            },
            {
              icon: '🏆',
              title: 'Staff Ratings & Motivation',
              desc: 'Each report gets a score. Motivate your team with recognition and reward top performers.',
            },
            {
              icon: '📊',
              title: 'Compliance Dashboard',
              desc: 'Track reports, vehicle checks, ratings, and more. Full compliance insight at a glance.',
            },
            {
              icon: '📨',
              title: 'Evidence On Demand',
              desc: 'Clients can request proof — you can send it instantly. Win tenders. Prove compliance. Stay audit-ready.',
            },
            {
              icon: '🗂️',
              title: 'Policy & Compliance ZIP Export',
              desc: 'Download grouped policy, health, safety, and training files as a ZIP. Perfect for tenders or audits.',
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-sm transition duration-300 hover:shadow-md hover:bg-orange-50 hover:border hover:border-orange-200 animate-fade-in"
              style={{ animationDelay: `${idx * 75}ms`, animationFillMode: 'both' }}
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="text-lg font-semibold text-smartOrange mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-smartOrange text-white text-center py-8 px-4 flex items-center justify-center gap-2">
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 19a1 1 0 1 1 .001-1.999A1 1 0 0 1 12 21zm3-4H9v-1h6v1zm0-3H9v-1h6v1zm0-3H9V10h6v1z" />
        </svg>
        <h3 className="text-lg md:text-xl font-semibold">
          Available now on iOS and Android. Access anywhere. Train and track your teams in real time.
        </h3>
      </section>

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* FINAL CTA SECTION */}
      <section
        className="relative text-white text-center py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${conesBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 backdrop-brightness-50 z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Train staff. Track reports. Prove compliance. All in one place.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
            <a
              href="/signup"
              className="bg-smartOrange text-white px-6 py-3 rounded font-medium hover:bg-orange-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


