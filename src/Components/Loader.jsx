export default function Loader(){
    return(<>
    <div id="loading">
  <div id="loading-center">
    <div id="loading-center-absolute">
      {/* loading content here */}
      <div className="tp-preloader-content">
        <div className="tp-preloader-logo">
          <div className="tp-preloader-circle">
            <svg
              width={190}
              height={190}
              viewBox="0 0 380 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                stroke="#D9D9D9"
                cx={190}
                cy={190}
                r={180}
                strokeWidth={6}
                strokeLinecap="round"
              />
              <circle
                stroke="red"
                cx={190}
                cy={190}
                r={180}
                strokeWidth={6}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <img src="img/logo/preloader/preloader-icon.svg" alt="" />
        </div>
        <h3 className="tp-preloader-title">Shofy</h3>
        <p className="tp-preloader-subtitle">Loading</p>
      </div>
    </div>
  </div>
</div>

    
    
    
    
    
    
    </>)
}