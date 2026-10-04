import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { generalFaqs } from '@/data/faqs';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | ProActive Physio"
        description="Frequently asked questions about ProActive Physio — physiotherapy services, sports injury care, geriatric physiotherapy and online consultations in Delhi, Gurugram and Chandigarh."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        label="Questions & Answers"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking the right physiotherapist with ProActive Physio."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        subtitle="Get in touch with our team and we will be happy to help."
      />
    </>
  );
}
