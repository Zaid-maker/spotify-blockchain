import React from "react";

const styles = {
  main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
  button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
  text: `text-4xl text-black mb-10`,
  buttons: `flex items-center`,
};

const Payment = () => {
  return (
    <div className={styles.main}>
      <p className={styles.text}>Make Payment to use the service.</p>
    </div>
  );
};

export default Payment;
