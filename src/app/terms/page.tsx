import Navbar from "@/components/Navbar";
import "../privacy/legal.css";

export const metadata = {
  title: "Terms & Conditions | Delora",
  description: "Delora&apos;s terms and conditions of sale and use.",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="legal-hero">
        <div className="container">
          <span className="legal-badge">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <div className="legal-layout">
            <nav className="legal-nav">
              <ul>
                <li><a href="#agreement">Agreement</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#ordering">Ordering</a></li>
                <li><a href="#payment">Payment</a></li>
                <li><a href="#liability">Liability</a></li>
                <li><a href="#governing">Governing Law</a></li>
              </ul>
            </nav>

            <div className="legal-content">
              <div className="legal-intro">
                These Terms & Conditions govern your use of the Delora website and the purchase of products from us. By placing an order you agree to these terms in full.
              </div>

              <section id="agreement">
                <h2>1. Agreement to Terms</h2>
                <p>By accessing our website at delora.com or purchasing any product from us, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, you should not use our website or purchase our products.</p>
              </section>

              <section id="products">
                <h2>2. Products</h2>
                <p>All products are sold for personal, non-commercial use. The Delora Elite IPL device is a cosmetic product intended for at-home hair removal. It is not a medical device for the treatment of medical conditions.</p>
                <p>Product images are for illustrative purposes. While we make every effort to display colours accurately, we cannot guarantee that your device&apos;s display will accurately reflect the product.</p>
                <p>We reserve the right to discontinue any product at any time. All products are subject to availability.</p>
              </section>

              <section id="ordering">
                <h2>3. Ordering</h2>
                <p>When you place an order, you are making an offer to purchase the product at the stated price. All orders are subject to acceptance, which we confirm by sending you an order confirmation email.</p>
                <p>We reserve the right to refuse any order in our sole discretion, including in cases of suspected fraud, incorrect pricing due to system error, or product unavailability.</p>
                <p>You must be 18 years of age or older to purchase from Delora.</p>
              </section>

              <section id="payment">
                <h2>4. Payment</h2>
                <p>All prices are displayed in EUR (€) inclusive of VAT where applicable. Prices do not include shipping, which is calculated at checkout.</p>
                <p>We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and PayPal. All transactions are processed securely by Shopify Payments (Stripe). We do not store your card details.</p>
                <p>For customers in Bulgaria, prices include Bulgarian VAT at the applicable rate. For EU customers outside Bulgaria, VAT is applied according to the destination country&apos;s rate.</p>
              </section>

              <section id="liability">
                <h2>5. Limitation of Liability</h2>
                <p>Delora is not liable for any indirect, incidental, or consequential losses arising from your use of our products, beyond the purchase price of the product in question.</p>
                <p>Our products are designed and tested for use on intact, healthy skin within the Fitzpatrick Type I–V range. Adverse reactions resulting from use outside the stated guidelines, on contraindicated skin conditions, or on skin types outside our safe operating range are not covered by our warranty or guarantee.</p>
                <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be legally excluded.</p>
              </section>

              <section id="governing">
                <h2>6. Governing Law</h2>
                <p>These Terms & Conditions are governed by the laws of the Republic of Bulgaria. Any disputes shall be subject to the exclusive jurisdiction of the Bulgarian courts.</p>
                <p>For consumers in the EU, mandatory consumer protection rights in your country of residence are not affected by this clause.</p>
                <p>If you have any questions about these terms, contact us at <a href="mailto:hello@delora.com">hello@delora.com</a>.</p>
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
