import Image from 'next/image';

const PantipPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={process.env.Bander_image_URL!}
          height={1000}
          width={1000}
          alt="ptcdn"
        />

      </div>

    </div>
  );
};

export default PantipPage;
