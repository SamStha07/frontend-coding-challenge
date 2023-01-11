import ClockIcon from 'components/icons/clock';
import Loader from 'components/loader.component';
import SpellDetailType from './components/spell-detail-type.component';
import useFetchDetails from './useFetchDetails';

const SpellsDetailsRoute = () => {
  const { data, error, isError, loading } = useFetchDetails();

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <div className='flex mt-10 justify-center'>
        <div className='py-8 px-6 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl'>
          <div className='w-full'>
            {/* name of the spell */}
            <h4 className='text-xl font-semibold text-cyan-900 text-justify'>{data?.name}</h4>

            {/* others info regarding their type */}
            <SpellDetailType
              level={data?.level}
              attack_type={data?.attack_type}
              range={data?.range}
            />

            {/* description section */}
            <p className='text-sm text-gray-700'>{data?.desc} 🔥</p>

            {/* duration section */}
            <div className='flex items-center space-x-4 justify-between'>
              <div className='text-grey-500 flex flex-row space-x-1  my-4'>
                <ClockIcon />
                <p className='text-xs'>
                  Duration: <span className='text-slate-800 font-medium'>{data?.duration}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellsDetailsRoute;
