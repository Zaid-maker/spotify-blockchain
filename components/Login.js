import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { Payment } from './payment'

const styles = {
  loginPage: `w-screen h-screen bg-white flex justify-center flex-col items-center`,
  text: `text-4xl text-black mb-10`,
};

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.text}>Login to access this app.</div>
      <WalletMultiButton />
    </div>
  );
};

export default Login;
