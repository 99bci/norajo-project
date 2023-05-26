import { Modal } from "@/components/Modal";
import { FER } from "@/components/FER";
import { Emoji } from "@/components/Emoji";

export default function Home() {
  return (
    <>
      {/* modal wrapper */}
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-orange-100">
        <Modal />
        {/* <FER /> */}
        <Emoji />
      </div>
    </>
  );
}
