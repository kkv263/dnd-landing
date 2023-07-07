import './styles/Timeline.scss'

const Timeline = () => {

  return (
    <section className="timeline">
      <div className="timeline__line"></div>
      <div className="timeline__section">
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline">step 1: create a character</h2>
            <div className="timeline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ratione provident dolores labore placeat? Quaerat, ex odio a ut optio similique pariatur quod autem corporis non aut unde ipsa voluptas.</div>
          </div>
        </div>
      </div>

      <div className="timeline__section">
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline">step 2: form a party</h2>
            <div className="timeline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ratione provident dolores labore placeat? Quaerat, ex odio a ut optio similique pariatur quod autem corporis non aut unde ipsa voluptas.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
