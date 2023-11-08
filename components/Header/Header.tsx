import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';



const Header = () => {


  return (
    <div  className='relative h-[830px] max-lg:h-[1300px]   max-xsm:h-[950px]'>
    <div className={`transition-div  absolute top-0 w-full hidden `}><FirstSlide/></div>
    <div className={`transition-div  absolute top-0 w-full `}><SecondSlide/></div>
    </div>
  );
};

export default Header;
