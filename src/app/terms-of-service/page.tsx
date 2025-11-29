import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | A1 Aluminium',
  description: 'Terms of Service for A1 Aluminium, Glass & Netting Solutions. Read our terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">
            Last updated: November 2024
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the services of {BUSINESS_INFO.name}, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Services Offered</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We provide professional installation services for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Aluminium windows, doors, partitions, and sliding systems</li>
                <li>Glass partitions, railings, shower enclosures, and mirrors</li>
                <li>Safety netting, bird netting, and mosquito nets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Quotations & Pricing</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All quotations are valid for 15 days from the date of issue unless otherwise specified.</li>
                <li>Prices are subject to change based on material costs and market conditions.</li>
                <li>Final pricing will be confirmed after site inspection and measurement.</li>
                <li>Additional charges may apply for complex installations or special requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>A 50% advance payment is required to confirm the order.</li>
                <li>Remaining 50% is due upon completion of installation.</li>
                <li>We accept Cash, UPI, Bank Transfer, and Cheques.</li>
                <li>For large projects, customized payment schedules may be arranged.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Installation & Delivery</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Installation timelines will be communicated after order confirmation.</li>
                <li>Delays due to unforeseen circumstances will be communicated promptly.</li>
                <li>Customer must ensure site readiness before scheduled installation.</li>
                <li>Access to electricity and water at the site is required for installation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Warranty</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We provide 1-2 years warranty on workmanship depending on the service.</li>
                <li>Material warranties are as per manufacturer terms.</li>
                <li>Warranty does not cover damage due to misuse, accidents, or natural disasters.</li>
                <li>Warranty claims must be reported within 7 days of discovering the issue.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cancellation & Refunds</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Orders can be cancelled within 24 hours of confirmation for a full refund.</li>
                <li>Cancellations after material procurement may incur charges.</li>
                <li>Custom-made items are non-refundable once production begins.</li>
                <li>Refunds will be processed within 7-10 business days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Customer Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate measurements and site information.</li>
                <li>Ensure safe access to the installation site.</li>
                <li>Clear the work area before installation begins.</li>
                <li>Inspect and approve the work upon completion.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, or consequential 
                damages arising from the use of our services. Our total liability shall not exceed the 
                amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms shall be resolved through mutual discussion. 
                If unresolved, disputes shall be subject to the jurisdiction of courts in Mumbai, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>{BUSINESS_INFO.name}</strong></p>
                <p className="text-gray-700">📞 {BUSINESS_INFO.phone.display}</p>
                <p className="text-gray-700">✉️ {BUSINESS_INFO.email.primary}</p>
                <p className="text-gray-700">📍 {BUSINESS_INFO.address.full}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting on our website. Continued use of our services 
                constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
