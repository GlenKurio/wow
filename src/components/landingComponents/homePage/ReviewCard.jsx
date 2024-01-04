function ReviewCard({ review }) {
  return (
    <article className="rounded-md max-w-[325px] p-4 shadow-lg bg-gradient-to-r from-[#8d2de24f] to-[#4b00e061] flex flex-col gap-2 hover:shadow-2xl transition-all duration-300 select-none">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={review.avatar} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-sm font-[500]">{review.fullName}</span>
          <span className="font-[200] text-sm">{review.social}</span>
        </div>
      </div>
      <div>
        <p className="text-sm tracking-[0.02rem] leading-[1.7]">
          {review.body}
        </p>
      </div>
    </article>
  );
}

export default ReviewCard;
