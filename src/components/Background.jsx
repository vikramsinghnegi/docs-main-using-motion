


function Background() {
  return (
    <>
      {/* Full-screen background */}
      <div className='w-full h-screen fixed z-[3]'></div>

      {/* Top label */}
      <div className=" color absolute top-[5%] w-full py-10 flex justify-center text-3xl text-red-500 font-semibold">
        Document
      </div>

      {/* Big centered heading */}
      <h1 className=" color absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none tracking-tighter font-semibold text-blue-600">
        Docs
      </h1>
    </>
  );
}

export default Background;

