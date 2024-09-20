import { Image } from '@nextui-org/image';

type BranderProps = {

  width?: string;
  height?: string;
};
export default function Brander({ width = '55', height = '55' }: BranderProps) {
  return (
    <div className="mx-0 w-fit
    p-3
    py-2"
    >
      <Image
        src={process.env.NEXT_PUBLIC_Brander_image_URL!}
        radius="none"
        alt="logo"
        width={width}
        height={height}
      />
    </div>
  );
}
