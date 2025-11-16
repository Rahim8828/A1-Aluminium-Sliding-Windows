import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  a1Aluminium: boolean;
  competitors: boolean;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonFeature[] = [
  {
    feature: '15+ Years of Experience',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  },
  {
    feature: 'Free On-Site Consultation',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  },
  {
    feature: 'Same-Day Emergency Service',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  },
  {
    feature: 'Premium Quality Materials',
    a1Aluminium: true,
    competitors: true
  },
  {
    feature: 'Warranty on All Work',
    a1Aluminium: true,
    competitors: true
  },
  {
    feature: 'Customized Solutions',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  },
  {
    feature: 'Competitive Pricing',
    a1Aluminium: true,
    competitors: true
  },
  {
    feature: 'Post-Installation Support',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  },
  {
    feature: 'Certified Professionals',
    a1Aluminium: true,
    competitors: false
  },
  {
    feature: 'All Mumbai Areas Covered',
    a1Aluminium: true,
    competitors: false,
    highlight: true
  }
];

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
}

export default function ComparisonTable({
  title = "Why Choose A1 Aluminium?",
  subtitle = "See how we compare to other service providers"
}: ComparisonTableProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Features
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-center text-sm font-semibold text-white bg-orange-600"
                  >
                    A1 Aluminium
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-center text-sm font-semibold text-gray-900"
                  >
                    Other Providers
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {COMPARISON_DATA.map((item, index) => (
                  <tr 
                    key={index}
                    className={item.highlight ? 'bg-orange-50' : ''}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {item.feature}
                      {item.highlight && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                          Advantage
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-orange-50">
                      {item.a1Aluminium ? (
                        <div className="flex justify-center">
                          <Check className="w-6 h-6 text-green-600" aria-label="Yes" />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X className="w-6 h-6 text-red-600" aria-label="No" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitors ? (
                        <div className="flex justify-center">
                          <Check className="w-6 h-6 text-green-600" aria-label="Yes" />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X className="w-6 h-6 text-red-600" aria-label="No" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Experience the A1 Aluminium difference today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 transition-colors"
          >
            Call for Free Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-base font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
