import { SingleImage } from "./SingleImage";
import { Camera } from "./Camera";

export const Modal = () => {
  return (
    <div className="flex h-3/4 w-3/4 flex-row items-center justify-center">
      {/* 모달 창의 좌측 영역 */}
      <div className="h-full w-1/2 border-1 bg-black flex items-center">
        <SingleImage />
      </div>
      {/* 모달 창의 우측 영역 */}
      <div className="flex h-full w-1/2 flex-col">
        <div className="border-1 h-5/6 bg-red-200">
          <Camera />
        </div>

        {/* 현재 촬영 버튼은 Camera.js에 딸려 있지만, 추후 이를 분리해야 될 것 */}
        <div className="border-1 h-1/6 bg-red-400">촬영 버튼</div>
      </div>
    </div>
  );
};
