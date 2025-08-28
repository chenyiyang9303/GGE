import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Green Giant Energy Texas Inc",
  description: "Learn about how Green Giant Energy Texas Inc uses cookies and similar technologies on our website to improve your browsing experience.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: July 13, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              What Are Cookies
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              How We Use Cookies
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              When you use and access our website, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li><strong>Essential cookies:</strong> To enable certain functions of the website</li>
              <li><strong>Analytics cookies:</strong> To analyze website traffic and understand how visitors interact with our website</li>
              <li><strong>Marketing cookies:</strong> To display relevant advertisements and track the effectiveness of our advertising campaigns</li>
              <li><strong>Functionality cookies:</strong> To remember your preferences and settings</li>
              <li><strong>Security cookies:</strong> To authenticate users and prevent fraudulent use of login credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Types of Cookies We Use
            </h2>
            
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Essential Cookies
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas of the website, and remember your consent preferences. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Performance and Analytics Cookies
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this information to improve our website's performance and user experience.
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg mb-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2"><strong>Third-party services we use:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Google Analytics - to analyze website traffic and user behavior</li>
                <li>Cal.com - for booking and scheduling functionality</li>
                <li>Vercel Analytics - for performance monitoring</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Functionality Cookies
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.
            </p>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Marketing and Targeting Cookies
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These third-party cookies are governed by the respective privacy policies of the third parties.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-800">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800 dark:text-neutral-200">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800 dark:text-neutral-200">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800 dark:text-neutral-200">Cookie Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800 dark:text-neutral-200">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-neutral-700 dark:text-neutral-300">
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Website analytics</td>
                    <td className="px-4 py-3">Performance</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="px-4 py-3">Cal.com</td>
                    <td className="px-4 py-3">Booking functionality</td>
                    <td className="px-4 py-3">Functional</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="px-4 py-3">Theme Preference</td>
                    <td className="px-4 py-3">Remember dark/light mode</td>
                    <td className="px-4 py-3">Functional</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Your Cookie Choices
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Browser Settings
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300 mb-4">
              <li>Delete all cookies</li>
              <li>Block all cookies</li>
              <li>Allow all cookies</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Open a private browsing / incognito browsing session</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Browser-Specific Instructions
            </h3>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg mb-4">
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Opt-Out Links
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
              You can also opt out of certain third-party cookies directly:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
              <li><a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
              <li><a href="http://optout.aboutads.info/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Impact of Disabling Cookies
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. Specifically, you may experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Difficulty remembering your login information</li>
              <li>Loss of personalization features</li>
              <li>Inability to use certain interactive features</li>
              <li>Problems with the booking and consultation system</li>
              <li>Reduced website performance and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
              <div className="text-neutral-800 dark:text-neutral-200">
                <p className="font-bold text-lg mb-2">Green Giant Energy Texas Inc</p>
                <p>41 University Drive, Suite 202</p>
                <p>Newtown, PA 18940</p>
                <p className="mt-2">P: +1-267-759-9000</p>
                <p>F: +1-267-759-8989</p>
                <p>E: <a href="mailto:privacy@omven.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">privacy@omven.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}