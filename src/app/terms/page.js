export const metadata = {
  title: "Terms of Service | Catination CRM - Real Estate CRM",
  description:
    "Read Catination CRM's Terms of Service to understand the rules and guidelines for using our real estate CRM platform in Dubai and India.",
  keywords: [
    "Catination CRM Terms of Service",
    "Real Estate CRM Terms",
    "CRM User Agreement",
    "CRM Legal",
    "Catination CRM Rules"
  ],
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900/40 to-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of <span className="text-purple-400">Service</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Welcome to <strong>Catination CRM</strong>. By using our platform in <strong>Dubai</strong> and <strong>India</strong>, you agree to comply with these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Acceptance */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-white/70 leading-relaxed">
            By using Catination CRM, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Use of Services */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">2. Use of Services</h2>
          <p className="text-white/70 leading-relaxed">
            You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to misuse the services, interfere with others’ use, or attempt unauthorized access.
          </p>
        </div>

        {/* Account Registration */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">3. Account Registration</h2>
          <p className="text-white/70 leading-relaxed">
            To use Catination CRM, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and all activity under your account.
          </p>
        </div>

        {/* Subscription and Payment */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">4. Subscription and Payment</h2>
          <p className="text-white/70 leading-relaxed">
            Certain features of Catination CRM may require a subscription. You agree to pay all applicable fees, and subscription terms are governed by the payment agreement during registration.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-white/70 leading-relaxed">
            All content, logos, trademarks, and software on Catination CRM are owned by or licensed to Catination. You may not copy, reproduce, or distribute our intellectual property without permission.
          </p>
        </div>

        {/* User Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">6. User Content</h2>
          <p className="text-white/70 leading-relaxed">
            Any data or content you upload remains your property. By using our services, you grant Catination a non-exclusive, worldwide license to host, store, and display your content for platform functionality.
          </p>
        </div>

        {/* Prohibited Activities */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">7. Prohibited Activities</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Illegal or fraudulent activity.</li>
            <li>Attempting unauthorized access to the platform.</li>
            <li>Disrupting the integrity of our services.</li>
            <li>Uploading harmful software or malware.</li>
          </ul>
        </div>

        {/* Termination */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">8. Termination</h2>
          <p className="text-white/70 leading-relaxed">
            Catination may suspend or terminate your access for violation of these Terms. You may also terminate your account at any time, subject to outstanding fees.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="text-white/70 leading-relaxed">
            Catination CRM is provided &quot;as is&quot; without warranties. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-white/70 leading-relaxed">
            These Terms are governed by the laws of the United Arab Emirates for Dubai operations and applicable Indian laws for India operations.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">11. Changes to Terms</h2>
          <p className="text-white/70 leading-relaxed">
            We may update these Terms periodically. Updated terms will be posted on this page, and continued use of our services constitutes acceptance of the changes.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-white/70 leading-relaxed">
            For questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-white/70 leading-relaxed">
            <strong>Email:</strong> catinationventure@gmail.com<br/>
            <strong>Address:</strong> Dubai, UAE &amp; India
          </p>
        </div>
      </section>
    </main>
  )
}
