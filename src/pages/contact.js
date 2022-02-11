import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby heirloom blue bottle banh mi aesthetic copper mug pop-up
              skateboard vexillologist neutra hashtag sriracha chillwave hoodie
              occupy gastropub.
            </p>
            <p>
              Af dreamcatcher fingerstache mixtape, chia activated charcoal
              fixie tattooed VHS scenester cronut. Ramps shoreditch letterpress
              sartorial polaroid.
            </p>
            <p>
              Authentic schlitz selfies, dreamcatcher vinyl readymade
              farm-to-table raclette austin YOLO letterpress neutra meditation
              venmo gastropub.
            </p>
          </article>
          <article>
              <form className="form-contact-form">
                <div className="form-row">
                    <label htmlFor="name">Your Name</label>
                    <input type='text' name='name' id='name'></input>
                </div>
                <div className="form-row">
                    <label htmlFor="name">Your Email</label>
                    <input type='text' name='email' id='email'></input>
                </div>
                <div className="form-row">
                    <label htmlFor="message">message</label>
                    <textarea cols='30' rows='10' name='message' id='message'></textarea>
                </div>
                <button type="submit" className="btn block">
                    sumbit
                </button>
              </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
