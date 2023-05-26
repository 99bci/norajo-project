import Image from "next/image";

export const SingleImage = () => {
  return (
    <>
      <Image
        src="/assets/newjeans.jpeg"
        alt="Newjeans"
        width={800}
        height={500}
      />
    </>
  );
};
