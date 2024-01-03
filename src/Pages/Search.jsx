
 export default function Search(){

 return(<>
  <section className="tp-search-area">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="tp-search-form">
          <div className="tp-search-close text-center mb-20">
            <button className="tp-search-close-btn tp-search-close-btn" />
          </div>
          <form action="#">
            <div className="tp-search-input mb-10">
              <input type="text" placeholder="Search for product..." />
              <button type="submit">
                <i className="flaticon-search-1" />
              </button>
            </div>
            <div className="tp-search-category">
              <span>Search by : </span>
              <a href="">Men, </a>
              <a href="#">Women, </a>
              <a href="#">Children, </a>
              <a href="#">Shirt, </a>
              <a href="#">Demin</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

 </>)
 }