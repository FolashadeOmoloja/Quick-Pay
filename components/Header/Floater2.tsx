import { useEffect, useState } from 'react';

const Floater2 = ({refresh2}:any) => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);

  useEffect(() => {
    if (refresh2) {
      // Initially hide all boxes when refresh is triggered
      setShowBox1(false);
      setShowBox2(false);
      setShowBox3(false);
      setShowBox4(false);
      setShowBox5(false);

      // Show the first box for 1 second
      setTimeout(() => {
        setShowBox1(true);
      }, 1000);

      // Show the second box for 1 second
      setTimeout(() => {
        setShowBox2(true);
      }, 2000);

      // Show the third box for 1 second
      setTimeout(() => {
        setShowBox3(true);
      }, 3000);

      // Show the fourth box for 1 second
      setTimeout(() => {
        setShowBox4(true);
      }, 4000);

      // Show the fifth box for 1 second
      setTimeout(() => {
        setShowBox5(true);
      }, 5000);
      setTimeout(() => {
        setShowBox1(false);
        setShowBox2(false);
        setShowBox3(false);
        setShowBox4(false);
        setShowBox5(false);
      }, 6000);
    }
  }, [refresh2]);


  return (
    <div className="relative h-[250px]">
      <div>
        <img
          src="icon10.svg"
          alt=""
          className={`box5 ${showBox5 ? 'box-5' : 'opacity-0'}`}
        />
        <img
          src="icon9.svg"
          alt=""
          className={`box4 ${showBox4 ? 'box-4' : 'opacity-0'}`}
        />
        <img
          src="icon8.svg"
          alt=""
          className={`box3 ${showBox3 ? 'box-3' : 'opacity-0'}`}
        />
        <img
          src="icon7.svg"
          alt=""
          className={`box2  ${showBox2 ? 'box-2' : 'opacity-0'}`}
        />
        <img
          src="icon6.svg"
          alt=""
          className={`box1 ${showBox1 ? 'box-1' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default Floater2;
