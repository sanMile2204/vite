import './App.css'
import Principal_content from './components/Ppl_content.tsx';
import Navigation from './components/Navigation.tsx';
import ExtraContent from './components/ExtraContent.tsx';

function App() {

  return (
    <>
      <Navigation/>
      <section>
          <main>
              <Principal_content/>
              <aside>
                  <ExtraContent/>
              </aside>
          </main>
      </section>
      <footer>
          <p>&copy; 2024 Recetas saludables</p>
      </footer>
    </>
  )
}

export default App
