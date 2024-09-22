import PantipHitzContainer from './(content)/PantipHitzContainer';
import PantipPickContainer from './(content)/PantipPickContainer';
import PantipRealtimeContainer from './(content)/PantipRealtimeContainer';

const HomePage = () => {
  return (
    <div className="grid gap-y-8">
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <PantipPickContainer />
          <PantipHitzContainer />
        </div>
        <div>
          <PantipPickContainer />
          <Announce />
        </div>

      </div> */}
      <PantipRealtimeContainer />
      <div className="grid gap-8 2xl:grid-cols-[25%,1fr]">
        <PantipPickContainer />
        <PantipHitzContainer />

      </div>

      <PantipPickContainer />

    </div>
  );
};

export default HomePage;
