import Navbar from "@/components/Navbar";
import "./legal.css";

export const metadata = {
  title: "Privacy Policy | Delora",
  description: "Delora&apos;s privacy policy — how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="legal-hero">
        <div className="container">
          <span className="legal-badge">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <div className="legal-layout">
            <nav className="legal-nav">
              <ul>
                <li><a href="#collection">Data We Collect</a></li>
                <li><a href="#use">How We Use It</a></li>
                <li><a href="#sharing">Sharing</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#rights">Your Rights</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="legal-content">
              <div className="legal-intro">
                Delora (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data. This policy explains what data we collect, how we use it, and what rights you have as a data subject under GDPR.
              </div>

              <section id="collection">
                <h2>1. Data We Collect</h2>
                <p>We collect the following categories of personal data:</p>
                <ul>
                  <li><strong>Identity data:</strong> name, date of birth (for age verification)</li>
                  <li><strong>Contact data:</strong> email address, shipping address, phone number</li>
                  <li><strong>Transaction data:</strong> purchase history, payment confirmation (card numbers are never stored — processed by Stripe/Shopify Payments)</li>
                  <li><strong>Usage data:</strong> how you interact with our website (pages visited, time on site, device type)</li>
                  <li><strong>Skin consultation data:</strong> skin type and hair colour information entered in our Virtual Skin Consultation — this is used solely to personalise your product recommendation and is never sold or shared</li>
                </ul>
              </section>

              <section id="use">
                <h2>2. How We Use Your Data</h2>
                <p>We use your personal data to:</p>
                <ul>
                  <li>Process and fulfil your orders</li>
                  <li>Send order confirmations, tracking updates, and receipts</li>
                  <li>Personalise your skin consultation results</li>
                  <li>Send marketing emails (only with your explicit consent, unsubscribe at any time)</li>
                  <li>Improve our website and product experience through anonymised analytics</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section id="sharing">
                <h2>3. Sharing Your Data</h2>
                <p>We do <strong>not</strong> sell your personal data. We share limited data with trusted third parties only where necessary to operate our business:</p>
                <ul>
                  <li><strong>Shopify:</strong> e-commerce platform and payment processing</li>
                  <li><strong>Klaviyo:</strong> email marketing (only for users who have opted in)</li>
                  <li><strong>DHL / Speedy:</strong> order fulfilment and shipping</li>
                  <li><strong>Google Analytics:</strong> anonymised website performance data</li>
                </ul>
                <p>All third-party partners are GDPR-compliant and operate under data processing agreements with us.</p>
              </section>

              <section id="cookies">
                <h2>4. Cookies</h2>
                <p>We use the following types of cookies:</p>
                <ul>
                  <li><strong>Essential:</strong> Required for the site to function (cart, session management)</li>
                  <li><strong>Analytics:</strong> Google Analytics to understand site usage (anonymised)</li>
                  <li><strong>Marketing:</strong> Meta Pixel and TikTok Pixel — only active if you accept the cookie banner</li>
                </ul>
                <p>You can manage your cookie preferences at any time via the cookie consent banner or your browser settings.</p>
              </section>

              <section id="rights">
                <h2>5. Your Rights (GDPR)</h2>
                <p>As a data subject, you have the right to:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
                  <li><strong>Rectification:</strong> Correct inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                  <li><strong>Restriction:</strong> Request we limit how we process your data</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing for direct marketing at any time</li>
                </ul>
                <p>To exercise any of these rights, email us at <a href="mailto:privacy@delora.com">privacy@delora.com</a>. We will respond within 30 days.</p>
              </section>

              <section id="contact">
                <h2>6. Contact & Data Controller</h2>
                <p>
                  The data controller for Delora is:<br /><br />
                  <strong>Delora Ltd.</strong><br />
                  Sofia, Bulgaria<br />
                  <a href="mailto:privacy@delora.com">privacy@delora.com</a>
                </p>
                <p>If you are not satisfied with our response, you have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (CPDP) at <a href="https://www.cpdp.bg" target="_blank" rel="noopener">cpdp.bg</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="sci-footer">
        <div className="container">
          <a href="/" className="sci-footer-logo">DELORA</a>
          <p>© {new Date().getFullYear()} Delora. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
