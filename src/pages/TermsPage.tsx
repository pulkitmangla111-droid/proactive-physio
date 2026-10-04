import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | ProActive Physio"
        description="Terms and conditions for using ProActive Physio's sports physiotherapy booking platform and services."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
        title="Terms & Conditions"
        subtitle="Last updated: October 2026"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl prose-physio">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the ProActive Physio website and services, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p>

            <h2>2. Services</h2>
            <p>ProActive Physio provides a platform that connects athletes, players, families, coaches, academies, clubs and sports teams with qualified physiotherapists for professional physiotherapy services. We currently operate in Delhi, Gurugram and Chandigarh only.</p>

            <h2>3. Bookings</h2>
            <p>Booking requests are subject to physiotherapist availability. We do not guarantee that a physiotherapist will be available for every requested date, time and location. Confirmation of a booking constitutes an agreement between you and the physiotherapist.</p>

            <h2>4. Physiotherapist Verification</h2>
            <p>We verify the qualifications and registration of physiotherapists in our network. However, we do not guarantee the outcome of any treatment and are not responsible for the clinical decisions of individual physiotherapists.</p>

            <h2>5. No Medical Advice</h2>
            <p>Information on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of a qualified health provider with any questions about a medical condition.</p>

            <h2>6. Cancellations</h2>
            <p>Cancellation policies may vary and will be communicated at the time of booking. We encourage providing adequate notice if you need to cancel or reschedule.</p>

            <h2>7. Limitation of Liability</h2>
            <p>ProActive Physio acts as a platform connecting users with physiotherapists. We are not liable for the acts or omissions of individual physiotherapists, nor for any indirect or consequential loss arising from the use of our services.</p>

            <h2>8. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos and design, is the property of ProActive Physio and may not be reproduced without permission.</p>

            <h2>9. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in India.</p>

            <h2>10. Changes to Terms</h2>
            <p>We may update these terms from time to time. Changes will be posted on this page with an updated date.</p>

            <h2>11. Contact</h2>
            <p>If you have any questions about these terms, please contact us at proactivephysioteam@gmail.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
