import Hero from "../components/Hero/Hero";
import Counter from "../components/Counter/Counter";
import Partners from "../components/Partners/Partners";
import Products from "../components/Products/Products";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import JoinNow from "../components/JoinNow/JoinNow";

function App() {
  return (
    <>
      <main>
        <div className="ellipsis" style={{ top: '50px', right: '50px' }}></div>
        <div className="ellipsis ellipsis-green" style={{ top: '800px', right: '20px' }}></div>
        <div className="ellipsis ellipsis-purple" style={{ top: '2500px', right: '50px' }}></div>
        <div className="ellipsis" style={{ top: '3300px', right: '250px' }}></div>

        <section id='hero'>
          <Hero />
          <Counter />
        </section>

        <section id='partners'>
          <a class="sectionHeading" href="/#partners">
            <h2>Partners</h2>
          </a>
          <Partners />
        </section>
      </main>
    
      <Products/>

      <main>
        <section id='reviews'>
          <a class="sectionHeading" href="/#reviews">
            <h2>Reviews</h2>
            <p>What our users say</p>
          </a>
          <Reviews />
        </section>

        <section id='faq'>
          <a class="sectionHeading" href="/#faq">
            <h2>FAQ</h2>
            <p>Frequently Asked Questions</p>
          </a>
          <FAQ />
        </section>

        <section id='join-now'>
          <JoinNow />
        </section>

      </main>
    </>
  );
}

export default App;
