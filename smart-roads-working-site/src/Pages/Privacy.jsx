import React from 'react';

const Privacy = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow rounded relative print:bg-transparent print:shadow-none">
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 print:hidden"
      >
        Download / Print PDF
      </button>

      <h1 className="text-3xl font-bold text-orange-600 mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-600 mb-4"><strong>Effective Date:</strong> July 1, 2025</p>
      <p className="text-sm text-gray-600 mb-8"><strong>Provider:</strong> Smart Roads Limited</p>

      <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
        <p>
          This Privacy Policy explains how Smart Roads Limited (“we”, “our”, “us”) collects, uses, and protects your information when you use the Smart Roads mobile app, dashboard, or any related services (“Smart Roads”).
        </p>

        <h2 className="text-lg font-semibold text-orange-600">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name and email address (for admins and staff)</li>
          <li>Staff-submitted reports, form responses, and checklist data</li>
          <li>Uploaded photos (e.g., site safety, vehicle checks, compliance)</li>
          <li>Company documents, staff qualifications, and profile data</li>
          <li>Billing and invoicing contact details</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">2. How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To generate safety and compliance reports for internal use or client submissions</li>
          <li>To manage staff profiles, vehicle checklists, and performance tracking</li>
          <li>To provide company admins with feedback and insights</li>
          <li>To issue invoices and manage billing activity</li>
          <li>To support customer support or legal requests</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">3. Where Your Data Is Stored</h2>
        <p>
          All data is securely stored in Firebase (Google Cloud infrastructure). Uploaded documents and images are stored using Firebase Storage, while text data is stored in Firebase Firestore. We may also use third-party services (like Xero) to manage billing and invoicing.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">4. How Long We Keep Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Staff reports are stored for 2 years</li>
          <li>Vehicle pre-checks are stored for 12 months</li>
          <li>Company documents are stored indefinitely unless deleted or replaced</li>
        </ul>
        <p>
          Admins may export reports as PDFs or delete staff profiles as required.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">5. Sharing & Disclosure</h2>
        <p>
          We do <strong>not</strong> sell, rent, or share your data with external marketing services. Your information is only visible to company admins, relevant staff, and Smart Roads support staff where required to provide service or support.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">6. Your Rights</h2>
        <p>
          Under New Zealand law, you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Withdraw consent and request removal of your user account</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">7. Security Measures</h2>
        <p>
          Smart Roads uses encryption, authentication, and access-control measures to protect your data. Admins are responsible for managing who has access to their company data.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">8. Cookies & Analytics</h2>
        <p>
          Smart Roads does not use cookies. We may track general usage patterns (e.g., screen views, submission activity) for performance improvement using anonymized analytics.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">9. Updates to This Policy</h2>
        <p>
          We may update this policy as needed. When we do, we will post the changes here. Your continued use of Smart Roads confirms your acceptance of the updated policy.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">10. Contact Us</h2>
        <p>
          For privacy-related questions or deletion requests, email us at{' '}
          <a href="mailto:support@smartroads.co.nz" className="text-[#E65100] underline">
            support@smartroads.co.nz
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
