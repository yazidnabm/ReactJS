
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {
  function formatToIDRCurrency(value) {
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)

    return formattedValue.replace('Rp', 'Rp. ')
  }
  return (
    <>
      <section className='container px-24 py-4'>
        <div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116]" >
          <img src="/assets/images/AIR-FORCE-1-07.png" alt="" className="block max-h-[300px] mb-4 object-cover" />
            <div className="flex flex-col gap-2">
                <h4 className="font-medium text-[20px] text-white">Nike Air Force 1 &apos;07</h4>
                <span className="block font-medium text-[14px] text-[#eaeaea]">Men&apos;s Shoe</span>
                <span className="block font-medium text-[20px] text-white">{formatToIDRCurrency(1549000)}</span>
                <div>
                  <button className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center">
                      <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                      <span>Add to cart</span>
                  </button>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
