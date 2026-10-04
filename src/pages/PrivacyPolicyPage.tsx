import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | ProActive Physio"
        description="Privacy policy for ProActive Physio — how we collect, use and protect your personal information."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        title="Privacy Policy"
        subtitle="Last updated: October 2026"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl prose-physio">
            <h2>1. Introduction</h2>
            <p>ProActive Physio ("we", "us", "our") is committed to protecting your privacy. This privacy policy explains how we collect, use and safeguard your personal information when you use our website and services.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact information:</strong> name, email address, phone number</li>
              <li><strong>Booking information:</strong> sport, service, location, date and time preferences</li>
              <li><strong>Professional information:</strong> for physiotherapists joining our network, qualifications and registration details</li>
              <li><strong>Usage data:</strong> information about how you use our website</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process booking requests and connect you with physiotherapists</li>
              <li>Respond to enquiries and provide customer support</li>
              <li>Verify physiotherapist qualifications and credentials</li>
              <li>Improve our website and services</li>
              <li>Send relevant updates and communications (with your consent)</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We do not sell your personal information. We may share information with physiotherapists in our network for the purpose of fulfilling booking requests, and with service providers who help us operate our platform. We may also disclose information when required by law.</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss or misuse.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct or request deletion of your personal information. To exercise these rights, please contact us at proactivephysioteam@gmail.com.</p>

            <h2>7. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience. You can control cookies through your browser settings.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.</p>

            <h2>9. Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at proactivephysioteam@gmail.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
