import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Post-ironic glossier scenester man bun green juice, dreamcatcher
              neutra tilde
            </h2>
            <p>
              Pork belly put a bird on it bicycle rights aesthetic fixie, iPhone
              kitsch venmo wayfarers actually pour-over you probably haven't
              heard of them hot chicken tattooed.
            </p>
            <p>
              Hella taxidermy wayfarers cornhole poke wolf viral man bun 8-bit
              pitchfork paleo. Post-ironic blog DIY, small batch food truck
              hexagon four loko aesthetic austin swag.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="aboutimage"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
