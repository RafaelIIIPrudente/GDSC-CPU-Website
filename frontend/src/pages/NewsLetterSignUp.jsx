/* eslint-disable react/jsx-no-duplicate-props */
import Navbar from "../components/Navbar"

const NewsletterSignUp = () => {
  return (
    <>
      <Navbar/>
      <div class="create-event-form">
        <div class="greetings create-event-form">
          <div class="navbar">
            <div class="container event-form"  style={{alignItems: 'center'}}>
              <div class="card-container" style={{display: 'table', width: '100%', height: 500, alignItems: 'center'}}>
                <form method="post" action="/newsletter-signup">
                  <div class="form-group form-item title-admin-login" style={{alignItems: 'flex-end'}}>
                    <h1 class="temp-title" style={{fontSize: 50, color: 'black', fontWeight: 500}}>GDSC Newsletter</h1>
                  </div>
                  <div class="form-group form-item">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name" required/>
                  </div>
                  <div class="form-group form-item">
                    <label for="lastname">Last Name</label>
                        <input class="form-control" id="lastname" name="lastname" placeholder="Last Name" required/>
                  </div>
                  <div class="form-group form-item">
                    <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  
                  <button type="submit" class="btn btn-primary form-item" style={{marginTop: 20}}>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsletterSignUp;