function Home() {
  return (
    <div className="flex justify-center text-textcol dark:text-lightbg">
      <div className="container">
        <div className="flex">
          <div className="w-1/3 h-80 bg-primary m-1 p-2 ">
            <div className="flex items-center w-full h-full justify-center align-middle ">
              <p className="text-6xl text-lightbg font-bold text-center">
                KERAMIKA
              </p>
            </div>
          </div>
          <div className="w-2/3 h-80 bg-primary m-1 "></div>
        </div>
        <div className="flex">
          <div className="w-2/3 h-80 bg-primary m-1 "></div>
          <div className="w-1/3 h-80 bg-primary m-1 "></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
