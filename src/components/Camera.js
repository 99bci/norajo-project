import { useEffect, useRef } from "react";

export const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log("Error accessing the camera: " + error);
      }
    };

    enableCamera();
  }, []);

  const capturePhoto = () => {
    const video = videoRef.current;

    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const file = new File([blob], "captured_photo.jpg", {
          type: "image/jpeg",
        });
        saveFile(file);
      }, "image/jpeg");
    }
  };

  const saveFile = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const link = document.createElement("a");
      link.href = reader.result;
      link.download = file.name;
      link.click();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <video id="videoElement" autoPlay ref={videoRef}></video>
      <button onClick={capturePhoto}>Capture and Save</button>
    </div>
  );
};
