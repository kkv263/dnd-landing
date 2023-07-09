import { useRef, useState, useEffect } from 'react';
import './styles/Timeline.scss'
import { useInView } from 'react-intersection-observer';
import classImg from './assets/class.png';
import partyImg from './assets/party.png';
import playImg from './assets/play.png';

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


  return (
    <section className="timeline">
      <div className="timeline__line" data-active={timelineActive}>
        <button type="button" onClick={() => stepClick(0)} className='timeline__step timeline__step--create' data-inview={createInView}>
          <span className="timeline__text">create</span>
          <span className="timeline__circle"></span>
        </button>
        <button type="button" onClick={() => stepClick(1)} className='timeline__step timeline__step--party' data-inview={partyInView}>
          <span className="timeline__text">party up</span>
          <span className="timeline__circle"></span>
        </button>
        <button type="button" onClick={() => stepClick(2)} className='timeline__step timeline__step--play' data-inview={playInView}>
          <span className="timeline__text">play</span>
          <span className="timeline__circle"></span>
        </button>
      </div>
      <div className="timeline__section" id="create" ref={el => timelineRefs.current[0] = el}>
      <div className="timeline__section-top" ref={createRef}></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline"><span className="timeline__step-number">1</span> create a character</h2>
            <div className="timeline__description">Create one or many characters on the server using our custom discord bot! Play DnD with one character or switch between others. We support both Roll20 and Foundry games.</div>
            <img className="timeline__content-img" src={classImg} alt="1 magigcian, 1 druid, and 1 rogue standing side by side" />
          </div>
        </div>
      </div>

      <div className="timeline__section" id="party" ref={el => timelineRefs.current[1] = el}>
      <div className="timeline__section-top"></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline" ><span className="timeline__step-number">2</span> form a party</h2>
            <div className="timeline__description">Are you a player? Watch the quest board for upcoming one shots hosted by a DM. Maybe you're a dungeon master? Feel free to create your own one shot where others can sign up to play!</div>
            <img className="timeline__content-img" ref={partyRef} src={partyImg} alt="female adventurer looking at quest board" />
          </div>
        </div>
      </div>

      <div className="timeline__section" id="play" ref={el => timelineRefs.current[2] = el}>
      <div className="timeline__section-top"></div>
        <div className="container">
          <div className="timeline__content">
            <h2 className="timeline__headline" ><span className="timeline__step-number">3</span> slay some dragons</h2>
            <div className="timeline__description">Once you've gotten your party together -- you're ready to slay some dragons (or hang out at an inn, we don't judge)! Gain experience and loot for your characters and take them to the next one shot!</div>
            <img className="timeline__content-img" ref={playRef} src={playImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
