import { feedback } from '../constants';
import style from '../styles';
import TeamCard from './TeamCard';
import { Link } from 'react-router-dom';
const ErrP = () => (
  <section
    id="clients"
    className={`${style.paddingY} ${style.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] justify-center">
      <h1 className={`${style.heading2}`}>404: PageNotFound 😕</h1>
    </div>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
     <p className={style.paragraph}>
      OOpsiii!!!... looks like you entered the wrong url...👇
    </p>
    </div>
    <br />
    <div>
    <p className={style.paragraph}>
   
      kindly click{' '}
      <span className='text-gradient text-2xl'>
        {' '}
        <Link to="/">Me</Link>
      </span>{' '}
      to find your way {''}
      <span className='text-gradient text-2xl'><Link to="/">Home</Link></span>
    </p>
     </div>
  </section>
);

export default ErrP;
