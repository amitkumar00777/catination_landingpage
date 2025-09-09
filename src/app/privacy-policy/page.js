export const metadata = {
  title: "Privacy Policy | Catination CRM - Real Estate CRM",
  description:
    "Read Catination CRM's Privacy Policy to learn how we collect, use, and protect your data while providing our real estate CRM services in Dubai and India.",
  keywords: [
    "Catination CRM Privacy Policy",
    "Real Estate CRM Data Protection",
    "CRM Privacy",
    "Data Security Real Estate",
    "User Data Protection"
  ],
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900/40 to-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy <span className="text-purple-400">Policy</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            At <strong>Catination CRM</strong>, your privacy matters. Learn how we collect, use, and protect your personal information when using our real estate CRM platform in <strong>Dubai</strong> and <strong>India</strong>.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Information We Collect */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-white/70 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, company details, and CRM usage data to provide and improve our services.
          </p>
        </div>

        {/* How We Use */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-white/70 leading-relaxed mb-4">Your information is used to:</p>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Provide and personalize our CRM services.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Send updates, newsletters, and promotional communications.</li>
            <li>Analyze usage patterns to improve our platform.</li>
            <li>Ensure compliance with legal obligations.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">3. Data Security</h2>
          <p className="text-white/70 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Your data is stored securely and accessed only by authorized personnel.
          </p>
        </div>

        {/* Sharing Information */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="text-white/70 leading-relaxed">
            Catination CRM does not sell or rent your personal information. We may share your data with trusted third-party service providers to deliver and improve our services, or when required by law.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">5. Cookies and Tracking</h2>
          <p className="text-white/70 leading-relaxed">
            We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and optimize our services. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-white/70 leading-relaxed">
            You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications by contacting us or following the unsubscribe instructions in emails.
          </p>
        </div>

        {/* Policy Changes */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-white/70 leading-relaxed">
            We may update this Privacy Policy periodically. Changes will be posted on this page with the updated date. Please review this policy regularly to stay informed about how we protect your information.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-white/70 leading-relaxed">
            If you have questions about this Privacy Policy or how we handle your data, please contact us at:
          </p>
          <p className="text-white/70 leading-relaxed">
            <strong>Email:</strong> support@catinationcrm.com<br/>
            <strong>Address:</strong> Dubai, UAE & India
          </p>
        </div>
      </section>
    </main>
  )
}
