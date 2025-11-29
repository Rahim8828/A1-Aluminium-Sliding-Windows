import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | A1 Aluminium',
  description: 'Privacy Policy for A1 Aluminium, Glass & Netting Solutions. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">
            Last updated: November 2024
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, and address when you contact us or request a quote.</li>
                <li><strong>Service Information:</strong> Details about the services you&apos;re interested in, project requirements, and preferences.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Schedule site visits and consultations</li>
                <li>Deliver and improve our services</li>
                <li>Send service updates and promotional communications (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience and analyze website traffic. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>{BUSINESS_INFO.name}</strong></p>
                <p className="text-gray-700">📞 {BUSINESS_INFO.phone.display}</p>
                <p className="text-gray-700">✉️ {BUSINESS_INFO.email.primary}</p>
                <p className="text-gray-700">📍 {BUSINESS_INFO.address.full}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
