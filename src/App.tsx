import { Header } from './components/Header'
import { Main } from './components/Main'


function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='min-w-[510px] w-4/12 min-h-[calc(100vh-100px)] bg-black text-white'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
