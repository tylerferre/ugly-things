import { useContext, useState } from 'react'
import UglyForm from './components/UglyForm'
import UglyCard from './components/UglyCard'
import { context } from './ContextProvider'

function App() {

  const contextData = useContext(context)

  const cards = contextData.uglyData.map((item, index) => {
    return(
      <UglyCard
        key={index}
        id={item._id}
        title= {item.title}
        description={item.description}
        imgUrl= {item.imgUrl}
      />
    )
  })

  return (
    <div className='App'>
      <UglyForm/>
      <section className='cards'>
        {cards}
      </section>
    </div>
  )
}

export default App
