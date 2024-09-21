export default function ContentContainer({ children }: {
  children?: React.ReactNode;

}) {
  return (
    <div className=" grid  justify-center gap-6 gap-y-8

    sm:grid-cols-2
    md:grid-cols-3

    lg:grid-cols-4
      lg:rounded-xl
    lg:border
      lg:p-8
    2xl:grid-cols-6

    "
    >
      {children}
    </div>
  );
}
