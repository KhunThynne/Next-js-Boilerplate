import Announce from './(content)/(unfetch)/Announce';
import PantipHitzContainer from './(content)/PantipHitzContainer';
import PantipPickContainer from './(content)/PantipPickContainer';
import PantipRealtimeContainer from './(content)/PantipRealtimeContainer';

const HomePage = () => {
  return (
    <div className="grid gap-y-8">
      {' '}
      <PantipHitzContainer />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        <div className="grid gap-y-8">

          <Announce />

          <div>
            <PantipRealtimeContainer />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8">
          <div>
            <PantipPickContainer />
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;
