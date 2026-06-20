'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './ContentPages.css';
import './Footer.css';

export default function SciencePage() {
  return (
    <main className="cp-page">
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="cp-hero cp-hero--warm">
        <div className="cp-container">
          <span className="cp-hero__eyebrow">НАУКАТА</span>
          <h1 className="cp-hero__title">
            Науката зад IPL{'\n'}технологията на Delora
          </h1>
          <p className="cp-hero__subtitle">
            Разберете как интензивната пулсираща светлина трансформира кожата ви
            — безопасно, ефективно и научно доказано.
          </p>
          <div className="cp-hero__placeholder">
            <div className="cp-placeholder" style={{ height: '100%' }}>
              <span className="cp-placeholder__icon">🔬</span>
              <span className="cp-placeholder__label">Hero изображение</span>
              <span className="cp-placeholder__dims">~500 × 400</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: How Light Transforms Skin ── */}
      <section className="cp-section">
        <div className="cp-container">
          <h2
            className="cp-section__title"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            Как светлината може да трансформира кожата ви
          </h2>

          {/* Mechanism 1 */}
          <div className="cp-mechanism">
            <div className="cp-mechanism__visual">
              <div className="cp-placeholder" style={{ minHeight: '260px' }}>
                <span className="cp-placeholder__icon">💡</span>
                <span className="cp-placeholder__label">
                  Илюстрация — насочване на меланина
                </span>
                <span className="cp-placeholder__dims">~400 × 280</span>
              </div>
            </div>
            <div className="cp-mechanism__content">
              <span className="cp-mechanism__step">СТЪПКА 01</span>
              <h3 className="cp-mechanism__title">Насочване на меланина</h3>
              <p className="cp-mechanism__text">
                IPL технологията излъчва широкоспектърна светлина, която се
                абсорбира селективно от меланина в космения фоликул. Тази
                насочена енергия загрява фоликула до температура, при която
                клетките, отговорни за растежа на космите, се увреждат трайно —
                без да засяга околната кожа.
              </p>
            </div>
          </div>

          {/* Mechanism 2 */}
          <div className="cp-mechanism">
            <div className="cp-mechanism__visual">
              <div className="cp-placeholder" style={{ minHeight: '260px' }}>
                <span className="cp-placeholder__icon">🔄</span>
                <span className="cp-placeholder__label">
                  Илюстрация — растежен цикъл
                </span>
                <span className="cp-placeholder__dims">~400 × 280</span>
              </div>
            </div>
            <div className="cp-mechanism__content">
              <span className="cp-mechanism__step">СТЪПКА 02</span>
              <h3 className="cp-mechanism__title">
                Прекъсване на растежния цикъл
              </h3>
              <p className="cp-mechanism__text">
                Космите преминават през три фази — анаген (активен растеж),
                катаген (преходна) и телоген (покой). IPL е най-ефективна по
                време на анагенната фаза, когато фоликулът е най-богат на
                меланин. Затова последователните сесии на всеки 1-2 седмици
                осигуряват обхващане на всички фоликули в активна фаза.
              </p>
            </div>
          </div>

          {/* Mechanism 3 */}
          <div className="cp-mechanism">
            <div className="cp-mechanism__visual">
              <div className="cp-placeholder" style={{ minHeight: '260px' }}>
                <span className="cp-placeholder__icon">✨</span>
                <span className="cp-placeholder__label">
                  Илюстрация — трайна редукция
                </span>
                <span className="cp-placeholder__dims">~400 × 280</span>
              </div>
            </div>
            <div className="cp-mechanism__content">
              <span className="cp-mechanism__step">СТЪПКА 03</span>
              <h3 className="cp-mechanism__title">Трайна редукция</h3>
              <p className="cp-mechanism__text">
                След 6-8 последователни сесии, повечето потребители отбелязват
                до 92% намаление на окосмяването. Увредените фоликули преминават
                в продължителна фаза на покой, като космите стават все по-фини и
                по-редки — до почти пълно изчезване в третираните зони.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Light Spectrum Banner ── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-spectrum">
            <div>
              <span className="cp-spectrum__eyebrow">
                СВЕТЛИННА ТЕХНОЛОГИЯ
              </span>
              <h2 className="cp-spectrum__title">
                Вижте какъв светлинен спектър използва Delora
              </h2>
              <p className="cp-mechanism__text" style={{ opacity: 0.7 }}>
                Delora използва оптимизиран диапазон от видима и близка
                инфрачервена светлина, прецизно калибриран за максимална
                ефективност при различни тонове на кожата и цветове на косми.
              </p>
              <div className="cp-spectrum__specs">
                <div className="cp-spectrum__spec">
                  <span className="cp-spectrum__spec-label">
                    Дължина на вълната
                  </span>
                  <span className="cp-spectrum__spec-value">530-1200nm</span>
                </div>
                <div className="cp-spectrum__spec">
                  <span className="cp-spectrum__spec-label">Енергия</span>
                  <span className="cp-spectrum__spec-value">3-5 J/cm²</span>
                </div>
              </div>
            </div>
            <div>
              <div className="cp-placeholder" style={{ minHeight: '300px' }}>
                <span className="cp-placeholder__icon">🌈</span>
                <span className="cp-placeholder__label">
                  Диаграма на светлинния спектър
                </span>
                <span className="cp-placeholder__dims">~400 × 300</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Healing Power (Split Layout) ── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-split">
            <div>
              <div className="cp-placeholder" style={{ minHeight: '400px' }}>
                <span className="cp-placeholder__icon">🧬</span>
                <span className="cp-placeholder__label">
                  Изображение — подмладяване на кожата
                </span>
                <span className="cp-placeholder__dims">~500 × 400</span>
              </div>
            </div>
            <div>
              <span className="cp-section__eyebrow">ПОДМЛАДЯВАНЕ</span>
              <h2 className="cp-section__title">
                Силата на фотоподмладяването
              </h2>
              <p className="cp-section__subtitle">
                Освен премахване на косми, IPL светлината стимулира производството
                на колаген и еластин в дълбоките слоеве на кожата. Този процес,
                известен като фотоподмладяване, подобрява текстурата на кожата,
                намалява фините линии и изравнява тена. Редовните сесии
                активират естествените възстановителни процеси на кожата,
                придавайки ѝ по-млад, сияен и здравословен вид — без инжекции,
                без престой, без болка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Safety & Skin Science ── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-safety">
            <h2
              className="cp-section__title"
              style={{ textAlign: 'center', marginBottom: '0.5rem' }}
            >
              Безопасност и наука за кожата
            </h2>
            <div className="cp-safety__grid">
              <div className="cp-safety__card">
                <div className="cp-safety__card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="cp-safety__card-title">Клинично тестван</h3>
                <p className="cp-safety__card-text">
                  Delora е преминала през строги клинични изпитания и е
                  сертифицирана с FDA Clearance и CE маркировка. Устройството е
                  тествано дерматологично за безопасна употреба в домашни условия.
                </p>
              </div>
              <div className="cp-safety__card">
                <div className="cp-safety__card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="cp-safety__card-title">Защита за очите</h3>
                <p className="cp-safety__card-text">
                  Вградената UV защита и интелигентният сензор за контакт с
                  кожата гарантират, че устройството излъчва светлина само при
                  плътен контакт — предпазвайки очите ви по всяко време.
                </p>
              </div>
              <div className="cp-safety__card">
                <div className="cp-safety__card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22"/>
                    <line x1="17.22" y1="7.22" x2="6.78" y2="17.22"/>
                    <line x1="22" y1="12" x2="2" y2="12"/>
                    <line x1="17.22" y1="16.78" x2="6.78" y2="7.22"/>
                  </svg>
                </div>
                <h3 className="cp-safety__card-title">Сапфирено охлаждане</h3>
                <p className="cp-safety__card-text">
                  Технологията със сапфирен охлаждащ накрайник поддържа
                  повърхността на кожата хладна по време на процедурата,
                  минимизирайки дискомфорта и предпазвайки от зачервяване.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Developed by Experts ── */}
      <section className="cp-section">
        <div className="cp-container">
          <h2
            className="cp-section__title"
            style={{ textAlign: 'center', marginBottom: '0.5rem' }}
          >
            Разработено от експерти{'\n'}в дерматологията и фотомедицината
          </h2>
          <p
            className="cp-section__subtitle cp-section__subtitle--centered"
            style={{ marginBottom: '2.5rem' }}
          >
            Зад Delora стои екип от водещи специалисти, които съчетават
            клиничен опит с иновативна светлинна технология.
          </p>

          <div className="cp-experts">
            {/* Expert 1 */}
            <div className="cp-expert">
              <div className="cp-expert__photo">
                <div className="cp-placeholder" style={{ height: '100%', borderRadius: 0 }}>
                  <span className="cp-placeholder__icon">👩‍⚕️</span>
                  <span className="cp-placeholder__label">Снимка</span>
                </div>
              </div>
              <div className="cp-expert__info">
                <h3 className="cp-expert__name">Д-р Елена Стоянова</h3>
                <p className="cp-expert__role">Дерматолог, к.м.н.</p>
                <p className="cp-expert__bio">
                  Над 15 години опит в клиничната дерматология и лазерната
                  медицина. Специалист по кожни заболявания и естетични
                  процедури с фокус върху иновативни светлинни терапии.
                </p>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="cp-expert">
              <div className="cp-expert__photo">
                <div className="cp-placeholder" style={{ height: '100%', borderRadius: 0 }}>
                  <span className="cp-placeholder__icon">👨‍🔬</span>
                  <span className="cp-placeholder__label">Снимка</span>
                </div>
              </div>
              <div className="cp-expert__info">
                <h3 className="cp-expert__name">Проф. Николай Петров</h3>
                <p className="cp-expert__role">Специалист по фотомедицина</p>
                <p className="cp-expert__bio">
                  Водещ изследовател в областта на фотобиомодулацията и
                  взаимодействието на светлината с биологичните тъкани.
                  Автор на над 40 научни публикации в международни списания.
                </p>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="cp-expert">
              <div className="cp-expert__photo">
                <div className="cp-placeholder" style={{ height: '100%', borderRadius: 0 }}>
                  <span className="cp-placeholder__icon">👩‍🔬</span>
                  <span className="cp-placeholder__label">Снимка</span>
                </div>
              </div>
              <div className="cp-expert__info">
                <h3 className="cp-expert__name">Д-р Мария Иванова</h3>
                <p className="cp-expert__role">Клиничен изследовател</p>
                <p className="cp-expert__bio">
                  Ръководи клиничните изпитания на Delora устройствата.
                  Специализира в оценка на ефикасността и безопасността
                  на домашни IPL системи за различни типове кожа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Footer ── */}
      <Footer />
    </main>
  );
}
