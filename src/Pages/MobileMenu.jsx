
 export default function MobileMenu(){
    return(<>
    <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
  <div className="container">
    <div className="row row-cols-5">
      <div className="col">
        <div className="tp-mobile-item text-center">
          <a href="shop.html" className="tp-mobile-item-btn">
            <i className="flaticon-store" />
            <span>Store</span>
          </a>
        </div>
      </div>
      <div className="col">
        <div className="tp-mobile-item text-center">
          <button className="tp-mobile-item-btn tp-search-open-btn">
            <i className="flaticon-search-1" />
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="tp-mobile-item text-center">
          <a href="wishlist.html" className="tp-mobile-item-btn">
            <i className="flaticon-love" />
            <span>Wishlist</span>
          </a>
        </div>
      </div>
      <div className="col">
        <div className="tp-mobile-item text-center">
          <a href="profile.html" className="tp-mobile-item-btn">
            <i className="flaticon-user" />
            <span>Account</span>
          </a>
        </div>
      </div>
      <div className="col">
        <div className="tp-mobile-item text-center">
          <button className="tp-mobile-item-btn tp-offcanvas-open-btn">
            <i className="flaticon-menu-1" />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
    
    </>)
 }