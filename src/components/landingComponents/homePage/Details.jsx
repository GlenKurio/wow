function Details() {
  return (
    <section className=" mt-32  bg-gradient-to-r from-[#ff00cc] to-[#333399] flex flex-col gap-4 md:flex-row overflow-hidden md:justify-between">
      <div className="md:max-w-[40%] flex flex-col p-4 gap-8">
        <h3 className="text-lg font-semibold text-base-content tracking-[1px]">
          Who Owes Whom App
        </h3>
        <h4 className="text-3xl font-bold">
          The finance app that makes life easier
        </h4>
        <p className="text-lg font-[300] tracking-[1px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          amet veritatis, necessitatibus reprehenderit non illo excepturi in
          natus dolorum sint eaque doloremque esse recusandae qui dolores ipsa a
          quasi sit?
        </p>
        <button className="btn btn-accent">Learn More &rarr;</button>
      </div>
      <div className="bg-details bg-cover bg-no-repeat bg-left md:bg-bottom-right md:w-[1100px] h-[700px] "></div>
    </section>
  );
}

export default Details;
