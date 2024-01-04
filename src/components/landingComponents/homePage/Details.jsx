function Details() {
  return (
    <section className=" mt-32  bg-gradient-to-r from-[#ff00cc] to-[#333399] flex flex-col gap-4 md:flex-row overflow-hidden md:justify-between rounded-lg">
      <div className="md:max-w-[40%] flex flex-col p-4 gap-8">
        <h3 className="text-lg font-semibold text-base-content tracking-[1px]">
          Who Owes Whom App
        </h3>
        <h4 className="text-4xl font-bold leading-[1.3]">
          The finance app that makes life easier
        </h4>
        <p className="text-lg font-[300] tracking-[1px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          amet veritatis, necessitatibus reprehenderit non illo excepturi in
          natus dolorum sint eaque doloremque esse recusandae qui dolores ipsa a
          quasi sit?
        </p>
        <button className="btn btn-accent">Learn More &rarr;</button>
        <div className="flex flex-col items-center mt-8 gap-4 ">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="/avatars-fillers/avatar-1.png" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/avatars-fillers/avatar-2.png" />
              </div>
            </div>

            <div className="avatar">
              <div className="w-12">
                <img src="/avatars-fillers/avatar-3.png" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/avatars-fillers/avatar-4.png" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+10k</span>
              </div>
            </div>
          </div>
          <p className="text-lg font-[600]">
            More than 10,000 monthly active users!
          </p>
        </div>
      </div>

      <div className="bg-details bg-cover bg-no-repeat bg-left md:bg-bottom-right md:w-[1100px] h-[700px] "></div>
    </section>
  );
}

export default Details;
