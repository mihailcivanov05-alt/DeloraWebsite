import Button from "./Button";

const EXPLORE_LINKS = [
  { label: "Консултация", href: "/#consultation" },
];

const SUPPORT_LINKS = [
  { label: "Поддръжка", href: "mailto:support@delora.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src="/logo.png" alt="Delora Logo" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">
              Подобряваме красотата чрез клинични технологии. Професионални IPL резултати — във вашия дом, по вашия график.
            </p>
            <p className="footer-copy">
              © {new Date().getFullYear()} Delora. Всички права запазени.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-col-title">Разгледайте</h4>
            <ul className="footer-links">
              {EXPLORE_LINKS.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">Поддръжка</h4>
            <ul className="footer-links">
              {SUPPORT_LINKS.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email capture */}
          <div>
            <h4 className="footer-col-title">Вътрешен кръг</h4>
            <p className="footer-email-desc">
              Ексклузивни предложения, съвети за процедури и ранен достъп. Без спам.
            </p>
            <div className="footer-email-form">
              <input
                type="email"
                placeholder="Вашият имейл адрес"
                className="footer-email-input"
                aria-label="Вашият имейл адрес за бюлетин"
              />
              <Button variant="primary" size="md">Присъединете се</Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal-text">
            Delora Ltd. · София, България · FDA Cleared · CE Marked
          </span>
          <div className="footer-legal-links"></div>
        </div>
      </div>
    </footer>
  );
}
