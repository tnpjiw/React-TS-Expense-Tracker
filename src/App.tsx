import BalanceDisplay from './components/BalanceDisplay';
import Transactions from './components/Transactions';
import Header from './components/Header';
import useTransaction from './hooks/useTransaction';
import AddTransaction from './components/AddTransaction';

const Apps = () => {
  const transaction = useTransaction()
  return (
    <div >
        <Header />
        <div className='mt-15 flex justify-center min-h-screen w-full'>
          <div className='flex-1 flex flex-col items-center gap-10'>
            <BalanceDisplay/>
            <AddTransaction {...transaction}/>
          </div>
          <div className='flex-1'>
            <Transactions {...transaction}/>
          </div>
        </div>
    </div>
  )
}

export default Apps