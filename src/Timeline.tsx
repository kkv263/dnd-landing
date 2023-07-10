import { useRef, useState, useEffect } from 'react';
import './styles/Timeline.scss'
import { useInView } from 'react-intersection-observer';
import classImg from './assets/class.png';
import partyImg from './assets/party.png';
import playImg from './assets/play.png';
import { motion } from "framer-motion"

const Timeline = () => {
  const [ timelineActive, setTimelineActive] = useState(0);
  const timelineRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, 3);
 }, []);

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

  const stepClick = (index: number) => {
    timelineRefs.current[index]?.scrollIntoView(
      { behavior: "smooth", block: "end", inline: "nearest" }
    );
    timelineRefs.current[index]?.blur();
  };

  const timeline = [
    {
      name: 'create',
      inViewObj: createInView,
      text: 'create',
      ref: createRef,
      step: 'create a character',
      description: 'Create one or many characters on the server using our custom discord bot! Play DnD with one character or switch between others. We support both Roll20 and Foundry games.',
      img: classImg,
      alt: '1 magician, 1 druid, and 1 rogue standing side by side'
    },

    {
      name: 'party',
      inViewObj: partyInView,
      text: 'party up',
      ref: partyRef,
      step: 'form a party',
      description: `Are you a player? Watch the quest board for upcoming one shots hosted by a DM. Maybe you're a dungeon master? Feel free to create your own one shot where others can sign up to play!`,
      img: partyImg,
      alt: 'female adventurer looking at quest board'
    },

    {
      name: 'play',
      inViewObj: playInView,
      text: 'play',
      ref: playRef,
      step: 'slay some dragons',
      description: `Once you've gotten your party together -- you're ready to slay some dragons (or hang out at an inn, we don't judge)! Gain experience and loot for your characters and take them to the next one shot!`,
      img: playImg,
      alt: 'adventurers gathered around a table at an inn'
    },
  ]

  const timeLineRef = useRef(null);

  return (
    <section className="timeline" ref={timeLineRef}>
      <div className="timeline__line" data-active={timelineActive}>
        { timeline.map((item, index) => (
          <button key={item.name} type="button" onClick={() => stepClick(index)} className={`timeline__step timeline__step--${item.name}`} data-inview={item.inViewObj}>
            <span className="timeline__text">{item.text}</span>
            <span className="timeline__circle"></span>
          </button>
        )) }
      </div>

      { timeline.map((item, index) => (
        <motion.div 
          key= {item.name}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0}}
          viewport={{ once: true, root:(timelineRefs.current[index] as any), amount: .3}}
          transition={{delay: 0.2, duration:.5}}
          className="timeline__section" id={item.name} ref={el => timelineRefs.current[index] = el}>
          {index === 0 ? (<div className="timeline__section-top" ref={item.ref}></div>) : ''}
          <div className="container">
            <div className="timeline__content">
              <h2 className="timeline__headline"><span className="timeline__step-number">{index + 1}</span> {item.step}</h2>
              <div className="timeline__description">{item.description}</div>
              
              {index !== 0 ? (<img className="timeline__content-img" ref={item.ref} src={item.img} alt={item.alt} />) : 
              (<img className="timeline__content-img" src={item.img} alt={item.alt} />)}
            </div>
          </div>
        </motion.div>
      )) }
    </section>
  )
}

export default Timeline
