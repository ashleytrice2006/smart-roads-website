import React, { useState } from 'react';
import { motion } from 'framer-motion';

import appStepImg from '../assets/Appscreenshots/Appreport5.jpg';
import adminStepImg from '../assets/dashboard/Report3.png';
import feedbackStepImg from '../assets/Appscreenshots/rEVIEW3.jpg';

import vehicleStep1 from '../assets/Appscreenshots/vehiclereport3.jpg';
import vehicleStep2 from '../assets/dashboard/VehiclePreCheck3.png';
import vehicleStep3 from '../assets/dashboard/VehiclePreCheck2.png';

import tenderStep1 from '../assets/dashboard/Company Docs.png';
import tenderStep2 from '../assets/dashboard/Tendering2.png';
import tenderStep3 from '../assets/dashboard/Tendering1.png';

const HowItWorks = () => {
  const [modalImage, setModalImage] = useState(null);

  const reportSteps = [
    {
      title: '1. Staff Complete Reports On-Site',
      description:
        'Staff fill out risk-based reports directly in the app — capturing safety checks, traffic layouts, and site photos.',
      image: appStepImg,
    },
    {
      title: '2. Admins Instantly Review & Comment',
      description:
        'Submitted reports appear in the admin dashboard. Comments, ratings, and improvement notes are added instantly.',
      image: adminStepImg,
    },
    {
      title: '3. Feedback Syncs Back to Staff',
      description:
        'Staff receive admin feedback straight to the app. It builds a culture of training, compliance, and constant improvement.',
      image: feedbackStepImg,
    },
  ];

  const vehicleSteps = [
    {
      title: '1. Staff Perform Vehicle Pre-Checks',
      description:
        'Staff complete a vehicle pre-check directly in the app — confirming lights, indicators, load safety, equipment, and more before driving.',
      image: vehicleStep1,
    },
    {
      title: '2. Vehicle Reports Sent to Dashboard',
      description:
        'Each vehicle check is submitted to the admin dashboard automatically with photos, comments, and issues attached.',
      image: vehicleStep2,
    },
    {
      title: '3. Issues Tracked, Services Flagged',
      description:
        'Admins track WOF, RUC, services, and flagged issues for each vehicle — helping ensure safety, compliance, and maintenance.',
      image: vehicleStep3,
    },
  ];

  const tenderingSteps = [
    {
      title: '1. Company Documents Tracked & Flagged',
      description:
        'Upload Health & Safety, Insurance, and other required documents. Expiry reminders keep you on top of compliance.',
      image: tenderStep1,
    },
    {
      title: '2. Competency Reports for Tenders',
      description:
        'Generate full tender packs showing staff competencies, report history, vehicle readiness, and safety stats.',
      image: tenderStep2,
    },
    {
      title: '3. Downloadable Tender ZIP Files',
      description:
        'Package all your docs and stats into one ZIP to submit for tenders, contracts, and compliance reviews.',
      image: tenderStep3,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          How Smart Roads Works
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Real-time field reporting, admin oversight, and instant feedback — all in one seamless workflow.
        </p>

        {/* Site Report Workflow */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {reportSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-orange-50 transition duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                  onClick={() => setModalImage(step.image)}
                />
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mt-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vehicle Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 mb-12"
        >
          Vehicle Safety & Maintenance Workflow
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {vehicleSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-orange-50 transition duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                  onClick={() => setModalImage(step.image)}
                />
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mt-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tendering Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 mb-12"
        >
          Tendering & Winning More Work
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10">
          {tenderingSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-orange-50 transition duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                  onClick={() => setModalImage(step.image)}
                />
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mt-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Zoomed"
            className="max-w-[75%] max-h-[75%] transform scale-100 rounded-xl border-4 border-white shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default HowItWorks;


