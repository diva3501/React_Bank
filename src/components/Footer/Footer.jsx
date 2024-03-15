import React from 'react'
import "../../scss/_footer.scss"

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer >
        <div className="container-fluid" id='footer' >
          <div className="row">
            <div className="col">
              <p >&copy; {year} Virtusa Bank</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer