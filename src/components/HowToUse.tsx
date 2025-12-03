import "../styles/HowToUse.css"
import appVideo1 from "../assets/AppVideo1.mp4"

const HowToUse = () => {
  return (
    <section id="how-to-use">
      <div id="how-to-use-wrapper">
        <h2 className="section-heading">Jak używać</h2>
      </div>
        <div id="how-to-use-info">  
        <div>
          <div>
            <h4>Prosta sprawa!</h4>
            <p>Aplikacja <strong>Ogarnijto.org</strong> pomaga uczniom zarządzać egzaminami i materiałami do nauki.
            Użytkownicy mogą dodawać egzaminy wraz z ważnymi informacjami, otrzymywać przypomnienia e-mail
            tydzień przed egzaminem oraz korzystać z generatora quizów, który pomaga w przygotowaniu. 
            Wypróbuj wersję demo oraz przekonaj się że ta aplikacja jest bardzo pomocna.
          </p>
          </div>
        </div>
         <video autoPlay muted controls id="hero-video">
            <source src={appVideo1} type="video/mp4"></source>
            </video>
        </div>
      </section>
  )
}

export default HowToUse
