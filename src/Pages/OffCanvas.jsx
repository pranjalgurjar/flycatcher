
 export default function OffCanvas(){
    return(<>
     <div className="offcanvas__area offcanvas__radius">
    <div className="offcanvas__wrapper">
      <div className="offcanvas__close">
        <button className="offcanvas__close-btn offcanvas-close-btn">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L11 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="offcanvas__content">
        <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
          <div className="offcanvas__logo logo">
            <a href="/index">
              <img src="img/logo/logo.png" alt="logo" height={100} />
            </a>
          </div>
        </div>
        <div className="offcanvas__category pb-40">
          <button className="tp-offcanvas-category-toggle">
            <i className="fa-solid fa-bars" />
            All Categories
          </button>
          <div className="tp-category-mobile-menu"></div>
        </div>
        <div className="tp-main-menu-mobile fix d-lg-none mb-40" />
        <div className="offcanvas__contact align-items-center d-none">
          <div className="offcanvas__contact-icon mr-20">
            <span>
              <img src="img/icon/contact.png" alt="" />
            </span>
          </div>
          <div className="offcanvas__contact-content">
            <h3 className="offcanvas__contact-title">
              <a href="tel:098-852-987">004524865</a>
            </h3>
          </div>
        </div>
        <div className="offcanvas__btn">
          <a href="contact.html" className="tp-btn-2 tp-btn-border-2">
            Contact Us
          </a>
        </div>
      </div>
      <div className="offcanvas__bottom">
        <div className="offcanvas__footer d-flex align-items-center justify-content-between">
          <div className="offcanvas__currency-wrapper currency">
            <span
              className="offcanvas__currency-selected-currency tp-currency-toggle"
              id="tp-offcanvas-currency-toggle"
            >
              Currency : USD
            </span>
            <ul className="offcanvas__currency-list tp-currency-list">
              <li>USD</li>
              <li>ERU</li>
              <li>BDT </li>
              <li>INR</li>
            </ul>
          </div>
          <div className="offcanvas__select language">
            <div className="offcanvas__lang d-flex align-items-center justify-content-md-end">
              <div className="offcanvas__lang-img mr-15">
                <img src="img/icon/language-flag.png" alt="" />
              </div>
              <div className="offcanvas__lang-wrapper">
                <span
                  className="offcanvas__lang-selected-lang tp-lang-toggle"
                  id="tp-offcanvas-lang-toggle"
                >
                  English
                </span>
                <ul className="offcanvas__lang-list tp-lang-list">
                  <li>Spanish</li>
                  <li>Portugese</li>
                  <li>American</li>
                  <li>Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="body-overlay" />

    
    
    </>)
 }