function BentoLayout() {
  return (
    <section className="md:grid md:grid-cols-12 md:grid-rows-12 flex flex-col gap-4 mt-16 py-16 bg-base-100">
      <article className="bg-blue-500 md:col-span-8 md:row-span-8 h-[250px]  rounded-lg p-2 shadow-lg ">
        1
      </article>
      <div className="bg-violet-500 md:col-span-4 md:row-span-4">2</div>
      <div className="bg-lime-500 md:col-span-4 md:row-span-4">3</div>
      <div className="bg-yellow-500 md:row-span-4 md:col-span-5">4</div>
      <div className="bg-rose-500 md:row-span-4 md:col-span-7">5</div>
    </section>
  );
}

export default BentoLayout;
