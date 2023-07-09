import { useState } from 'react';
import './styles/Timeline.scss'
import { useInView } from 'react-intersection-observer';


const Timeline = () => {
  const [ timelineActive, setTimelineActive] = useState(0);

  const [ createRef, createInView ] = useInView({
    /* Optional options */
    threshold: 1.0,
    onChange: (createInView) => {
      if(createInView) {
        setTimelineActive(0)
      }
      else {
        setTimelineActive(1);
      }
    }
  });

  const [ partyRef, partyInView ] = useInView({
    /* Optional options */
    threshold: 1.0,
    onChange: (partyInView ) => {
      if (partyInView) {
        setTimelineActive(2);
      }
    }
  });

  const [ playRef, playInView  ] = useInView({
    /* Optional options */
    threshold: 1.0,
    onChange: (playInView) => {
      if (playInView) {
        setTimelineActive(3);
      }
    }
  });


  return (
    <section className="timeline">
      <div className="timeline__line" data-active={timelineActive}>
        <button type="button" className='timeline__step timeline__step--create' data-inview={createInView}>create</button>
        <button type="button" className='timeline__step timeline__step--party' data-inview={partyInView}>party up</button>
        <button type="button" className='timeline__step timeline__step--play' data-inview={playInView}>play</button>
      </div>
      <div className="timeline__section" >
      <div className="timeline__section-top" ref={createRef}></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline"> step 1: create a character</h2>
            <div className="timeline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ratione provident dolores labore placeat? Quaerat, ex odio a ut optio similique pariatur quod autem corporis non aut unde ipsa voluptas.</div>
          </div>
        </div>
      </div>

      <div className="timeline__section">
      <div className="timeline__section-top"></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline" ref={partyRef}>step 2: form a party</h2>
            <div className="timeline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ratione provident dolores labore placeat? Quaerat, ex odio a ut optio similique pariatur quod autem corporis non aut unde ipsa voluptas.</div>
          </div>
        </div>
      </div>

      <div className="timeline__section">
      <div className="timeline__section-top"></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline" ref={playRef}>step 3: slay some dragons</h2>
            <div className="timeline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ratione provident dolores labore placeat? Quaerat, ex odio a ut optio similique pariatur quod autem corporis non aut unde ipsa voluptas.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
