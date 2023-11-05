import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';



const Header = () => {


  return (
    <div  className='relative h-[830px] max-md:h-[900px] max-xxsm:h-[950px]'>
    <div className={`transition-div  absolute top-0 w-full slide1 `}><FirstSlide/></div>
    <div className={`transition-div  absolute top-0 w-full slide2`}><SecondSlide/></div>
    </div>
  );
};

export default Header;
