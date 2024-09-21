import Content from '@/components/Contents/Content';
import ContentLists from '@/components/Contents/ListsContent';

const HomePage = async () => {
  return (
    <div className="">

      <div className="grid gap-y-8">
        <ContentLists HeadContainer="Announce" data={[{}]} />

        <Content HeadContainer="Pantip Pick" />

        <Content HeadContainer="Hit Tag" />

      </div>
    </div>
  );
};

export default HomePage;
