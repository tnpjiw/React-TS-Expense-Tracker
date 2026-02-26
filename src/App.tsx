import BalanceDisplay from './components/BalanceDisplay';
import Transactions from './components/Transactions';
import Header from './components/Header';

const Apps = () => {
  return (
    <div >
        <Header />
        <div className='mt-15 flex justify-center min-h-screen w-full'>
          <BalanceDisplay/>
          <Transactions />
        </div>
    </div>
  )
}

export default Apps