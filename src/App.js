import './App.css'
import Title from './components/atoms/headlines/Title'
import ImgMemes from './components/imgmeme/ImgMeme'

function App() {
  return (
    <main className="container my-5 px-5">
      <Title headlineText="Edita tu propio Meme" />
      <ImgMemes />
    </main>
  )
}

export default App
