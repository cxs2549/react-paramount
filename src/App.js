import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./views/Home/Home"
import styled from 'styled-components'

const Container = styled.div`
  /* max-width: 1225px; */
  margin: 0 auto;
`

const App = () => {
  return (
    <Container className="max-w-6xl">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Container>
  )
}

export default App
