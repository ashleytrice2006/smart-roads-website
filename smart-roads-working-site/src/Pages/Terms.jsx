import React from 'react';

const Terms = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow rounded relative print:bg-transparent print:shadow-none">
      {/* Print button */}
      <button
        onClick={handlePrint}
        className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 print:hidden"
      >
        Download / Print PDF
      </button>

      <h1 className="text-3xl font-bold text-orange-600 mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-4"><strong>Effective Date:</strong> July 1, 2025</p>
      <p className="text-sm text-gray-600 mb-8"><strong>Provider:</strong> Smart Roads Limited</p>

      <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
        <p>
          These Terms & Conditions (“Terms”) govern your access to and use of the Smart Roads software, dashboard, and mobile app (“Smart Roads”), provided by Smart Roads Limited (“we”, “our”, “us”). By signing up or using Smart Roads, you agree to these Terms in full.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">1. Service Description</h2>
        <p>
          Smart Roads is a compliance and workforce management system for the traffic management industry. It enables companies to manage staff competency, submit safety and worksite reports, track vehicle checks, and store documentation.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">2. Billing & Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>$14.99 NZD per active user per month — including staff, admins, and sub-admins.</li>
          <li>Invoices are issued on the last day of each calendar month.</li>
          <li>Payment is strictly due by the 20th of the following month.</li>
          <li>Failure to pay may result in suspended access without notice.</li>
          <li>We do not offer refunds or credits for partial usage or removed users.</li>
          <li>Late payment beyond 10 business days may incur penalty fees or interest at 5% per month.</li>
          <li>Continued use after invoice generation confirms agreement to the billing terms.</li>
          <li>We reserve the right to engage debt collection or legal action to recover unpaid fees.</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">3. User Responsibilities</h2>
        <p>
          Admins are responsible for creating and managing user access, maintaining accurate information, and ensuring Smart Roads is used legally and ethically. Each company must restrict access to authorized staff and ensure that staff understand their reporting obligations.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">4. Data Retention & Access</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Staff reports are retained for 2 years.</li>
          <li>Vehicle pre-checks are retained for 12 months.</li>
          <li>Company documents remain until replaced or deleted.</li>
          <li>PDF export is available for compliance and audit purposes.</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">5. Prohibited Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not submit false, offensive, or misleading data.</li>
          <li>Do not abuse the system via automation, scraping, or overload attempts.</li>
          <li>Do not circumvent platform security or impersonate another user.</li>
          <li>Use of Smart Roads for any illegal activity will result in termination.</li>
        </ul>

        <h2 className="text-lg font-semibold text-orange-600">6. Intellectual Property</h2>
        <p>
          All design, code, logic, workflows, structure, and branding of Smart Roads are fully owned by Smart Roads Limited. Use of this platform does not grant ownership or license to reproduce, copy, or mimic any part of the system.
        </p>
        <p className="font-semibold text-red-700">
          Any attempt to copy, replicate, resell, clone, reverse-engineer, or steal the Smart Roads system — including source code, UI/UX, logic flows, or business model — will result in immediate legal action, including prosecution, injunctive relief, damages, and criminal complaints under New Zealand law. We actively investigate and prosecute software theft.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">7. Enforcement & Termination</h2>
        <p>Smart Roads reserves the right to suspend or terminate any account for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Overdue payments.</li>
          <li>Violation of these Terms.</li>
          <li>Fraudulent or abusive use.</li>
          <li>Legal request or policy breach.</li>
        </ul>
        <p>We may also audit account usage if fraud, account sharing, or abuse is suspected.</p>

        <h2 className="text-lg font-semibold text-orange-600">8. Limitation of Liability & Data Risk</h2>
        <p>
          Smart Roads is a reporting and compliance support tool. All submitted data is securely stored using Google Firebase infrastructure. We follow industry best practices for platform security, backups, and access control.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We are not liable for any data loss, corruption, service outage, or breach caused by external attacks, platform bugs, third-party service outages, or user actions.</li>
          <li>We are not responsible for any fines, penalties, claims, or losses incurred by a company or client as a result of missing data, incomplete records, or downtime.</li>
          <li>We recommend exporting reports and compliance data as PDFs for backup and retention outside the platform where long-term access is required.</li>
        </ul>
        <p>
          In all cases, Smart Roads Limited's maximum liability is limited to the total subscription fees paid by your organization in the 3 months preceding the issue or claim.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">9. Non-Disparagement</h2>
        <p>
          You agree not to publish or promote false, misleading, or disparaging statements about Smart Roads Limited, the platform, or its representatives. Public complaints must be handled through official channels. We reserve the right to take legal action if this clause is breached.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">10. Data Processing & Compliance</h2>
        <p>
          We comply with the New Zealand Privacy Act. We do not sell or disclose user data to third parties. For enterprise clients requiring additional compliance (e.g., ISO, GDPR), a custom Data Processing Agreement (DPA) may be arranged.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">11. Changes to Terms</h2>
        <p>
          These Terms may be updated. You will be notified of changes, and continued use confirms acceptance.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">12. Governing Law</h2>
        <p>
          These Terms are governed by New Zealand law. All legal matters are handled in New Zealand courts.
        </p>

        <h2 className="text-lg font-semibold text-orange-600">Contact</h2>
        <p>
          Legal, billing, and general enquiries:{' '}
          <a href="mailto:support@smartroads.co.nz" className="text-[#E65100] underline">
            support@smartroads.co.nz
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;

