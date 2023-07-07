import './styles/Loader.scss'

const Loader = () => {

  return (
    <section className="loader" > 
      <span>Loading...</span>
      <div className="lds-ripple"><div></div><div></div></div>
    </section>
  )
}

export default Loader
