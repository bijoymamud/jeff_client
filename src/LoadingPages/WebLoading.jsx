import loadingGif from "../../src/assets/Loading/GIF.gif";

export function WebLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingGif} alt="Loading..." className="w-full h-screen" />
    </div>
  );
}
