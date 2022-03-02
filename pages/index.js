import Layout from "/components/layout/Layout"
import Hero from "components/hero/Hero"
import SectionBreak from "components/sectionBreak/SectionBreak"
import Card from "components/card/Card"
import ContactForm from "components/contactform/ContactForm"

function Home() {
  return (
    <Layout>
      <Hero
        heading="Hi I'm Saryu. I'm cool!"
        subHeading="Here's some work in my favorite areas of study. These include Coding, Photography, Drawing, and saving the environment."
        buttonText="Learn More"
        bgImage="/bgGif.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/Blue Hollows.png"
          alt="Project image"
          title="Blue Hollows on Mercury"
          text="A presentation providing information on the mysterious surface feature of Mercury, called Blue Hollows. It is not known for sure how they formed, and why they exist."
          buttonText="View slides"
          buttonLink="https://www.canva.com/design/DAEuKgsyFoM/V7NPxlvskzaxFfwDb8pGZw/view?utm_content=DAEuKgsyFoM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
        />

        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool Project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool Project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <SectionBreak />
      <h2>Contact</h2>
      <ContactForm></ContactForm>
    </Layout>
  )
}

export default Home
