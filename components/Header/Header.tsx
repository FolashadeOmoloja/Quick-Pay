import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';



const Header = () => {


  return (
    <div  className='relative h-[800px]'>
    <div className={`transition-div  absolute top-0 w-full`}><FirstSlide/></div>
    <div className={`transition-div  absolute top-0 w-full hidden`}><SecondSlide/></div>
    </div>
  );
};

export default Header;
