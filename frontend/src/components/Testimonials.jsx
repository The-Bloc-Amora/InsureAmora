import { feedback } from './../constants';
import style from '../styles';
import TeamCard from './TeamCard';
const Testimonials = () => (
  <section
    id="clients"
    className={`${style.paddingY} ${style.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] justify-center">
      <h1 className={`${style.heading2}`}>
        Meet The BlocAmora Team
      </h1>
    </div>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <TeamCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
