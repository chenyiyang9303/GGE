import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Omven LLC",
  description: "Read Omven LLC's terms of service to understand the conditions for using our consulting services and website.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: July 13, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Omven LLC's ("Omven", "we", "us", "our") website and consulting services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Services Description
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Omven provides strategic consulting services for seed-stage startups, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Business strategy and validation</li>
              <li>Technical architecture consulting</li>
              <li>Funding and investment preparation</li>
              <li>Team building and organizational development</li>
              <li>Product-market fit optimization</li>
              <li>Growth and scaling strategies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              User Accounts
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Consulting Services Terms
            </h2>
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Engagement Terms
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Our consulting services are provided under separate engagement agreements that outline specific scope, deliverables, timelines, and compensation. These Terms of Service apply to all such engagements unless specifically superseded by the engagement agreement.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Client Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300 mb-4">
              <li>Provide accurate and complete information necessary for our services</li>
              <li>Respond promptly to requests for information or clarification</li>
              <li>Make key personnel available for meetings and consultations</li>
              <li>Implement recommendations in good faith</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Confidentiality
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We maintain strict confidentiality regarding all client information and will not disclose any confidential information without prior written consent, except as required by law. Clients agree to maintain confidentiality regarding our methodologies, processes, and proprietary information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Payment terms will be specified in individual engagement agreements</li>
              <li>All fees are exclusive of applicable taxes unless otherwise stated</li>
              <li>Late payments may incur interest charges at the rate of 1.5% per month</li>
              <li>We reserve the right to suspend services for overdue accounts</li>
              <li>Refunds, if any, will be handled according to the specific engagement agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              The content, organization, graphics, design, and other matters related to our website and services are protected under applicable copyrights and other proprietary laws. Copying, redistributing, or republishing any such content is strictly prohibited without our express written permission.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Work product and deliverables created specifically for clients under our consulting engagements will be governed by the intellectual property provisions in the respective engagement agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Disclaimers and Limitations of Liability
            </h2>
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              No Warranties
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Our services are provided "as is" without any warranty of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Limitation of Liability
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              In no event shall Omven LLC be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Our total liability to you for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you to us for the specific service giving rise to the claim during the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Termination
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Upon termination, your right to use our services will cease immediately. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Governing Law
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the State of Pennsylvania, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Pennsylvania.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Changes to Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Contact Information
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
              <div className="text-neutral-800 dark:text-neutral-200">
                <p className="font-bold text-lg mb-2">Omven LLC</p>
                <p>41 University Drive, Suite 202</p>
                <p>Newtown, PA 18940</p>
                <p className="mt-2">P: +1-267-759-9000</p>
                <p>F: +1-267-759-8989</p>
                <p>E: <a href="mailto:legal@omven.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">legal@omven.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}