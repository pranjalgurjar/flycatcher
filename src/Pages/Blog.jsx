export default function Blog(){
    return(<>
 <section className="tp-blog-area pt-50 pb-75">
  <div className="container">
    <div className="row align-items-end">
      <div className="col-xl-4 col-md-6">
        <div className="tp-section-title-wrapper mb-50">
          <h3 className="tp-section-title">
            Latest news &amp; articles
            <svg
              width={114}
              height={35}
              viewBox="0 0 114 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                stroke="currentColor"
                strokeWidth={4}
                strokeMiterlimit="3.8637"
                strokeLinecap="round"
              />
            </svg>
          </h3>
        </div>
      </div>
      <div className="col-xl-8 col-md-6">
        <div className="tp-blog-more-wrapper d-flex justify-content-md-end">
          <div className="tp-blog-more mb-50 text-md-end">
            <a href="blog-grid.html" className="tp-btn tp-btn-2 tp-btn-blue">
              View All Blog
              <svg
                width={17}
                height={14}
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6.99976L1 6.99976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className="tp-blog-more-border" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="tp-blog-main-slider">
          <div className="tp-blog-main-slider-active swiper-container">
            <div className="swiper-wrapper">
              <div className="tp-blog-item mb-30 swiper-slide">
                <div className="tp-blog-thumb p-relative fix">
                  <a href="blog-details.html">
                    <img src="img/blog/blog-1.jpg" alt="" />
                  </a>
                  <div className="tp-blog-meta tp-blog-meta-date">
                    <span>14 July, 2022</span>
                  </div>
                </div>
                <div className="tp-blog-content">
                  <h3 className="tp-blog-title">
                    <a href="blog-details.html">
                      The Modern Art Clay Ceramics.
                    </a>
                  </h3>
                  <div className="tp-blog-tag">
                    <span>
                      <i className="fa-light fa-tag" />
                    </span>
                    <a href="#">Tablet,</a>
                    <a href="#">News</a>
                  </div>
                  <p>
                    The world is an amazing place providing an incredible
                    assortment of interesting locations across.
                  </p>
                  <div className="tp-blog-btn">
                    <a
                      href="blog-details.html"
                      className="tp-btn-2 tp-btn-border-2"
                    >
                      Read More
                      <span>
                        <svg
                          width={17}
                          height={15}
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 7.5L1 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tp-blog-item mb-30 swiper-slide">
                <div className="tp-blog-thumb p-relative fix">
                  <a href="blog-details.html">
                    <img src="img/blog/blog-2.jpg" alt="" />
                  </a>
                  <div className="tp-blog-meta tp-blog-meta-date">
                    <span>10 Nov, 2022</span>
                  </div>
                </div>
                <div className="tp-blog-content">
                  <h3 className="tp-blog-title">
                    <a href="blog-details.html">
                      How clothes are linked to climate
                    </a>
                  </h3>
                  <div className="tp-blog-tag">
                    <span>
                      <i className="fa-light fa-tag" />
                    </span>
                    <a href="#">Monitor,</a>
                    <a href="#">Technology</a>
                  </div>
                  <p>
                    The world is an amazing place providing an incredible
                    assortment of interesting locations across.
                  </p>
                  <div className="tp-blog-btn">
                    <a
                      href="blog-details.html"
                      className="tp-btn-2 tp-btn-border-2"
                    >
                      Read More
                      <span>
                        <svg
                          width={17}
                          height={15}
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 7.5L1 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tp-blog-item mb-30 swiper-slide">
                <div className="tp-blog-thumb p-relative fix">
                  <a href="blog-details.html">
                    <img src="img/blog/blog-3.jpg" alt="" />
                  </a>
                  <div className="tp-blog-meta tp-blog-meta-date">
                    <span>20 June, 2023</span>
                  </div>
                </div>
                <div className="tp-blog-content">
                  <h3 className="tp-blog-title">
                    <a href="blog-details.html">
                      The Sound Of Fashion: Malcolm
                    </a>
                  </h3>
                  <div className="tp-blog-tag">
                    <span>
                      <i className="fa-light fa-tag" />
                    </span>
                    <a href="#">Microphone,</a>
                    <a href="#">Computer</a>
                  </div>
                  <p>
                    The world is an amazing place providing an incredible
                    assortment of interesting locations across.
                  </p>
                  <div className="tp-blog-btn">
                    <a
                      href="blog-details.html"
                      className="tp-btn-2 tp-btn-border-2"
                    >
                      Read More
                      <span>
                        <svg
                          width={17}
                          height={15}
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 7.5L1 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>)
}