import { MEDIA } from "../constants/media";

export const PostSomething: React.FC = () => {
  return (
    <>
      <div className="grow flex gap-2 px-6 py-4 text-white font-niramit">
        <img
          src={MEDIA.ANONYM}
          alt="anonymous"
          className="w-8 invert mb-auto"
          style={{
            pointerEvents: "none",
          }}
        />
        <div className="w-full grid gap-2">
          <p className="flex gap-4 font-medium">
            <select
              name=""
              id=""
              className="border border-[#B2BEB5] px-3 py-1 text-sm rounded-xl my-auto"
            >
              <option value="#">BS Forum</option>
            </select>
            <span className="my-auto">Anonymous</span>
            <input type="checkbox" name="" id="" />
          </p>
          <p>
            <input
              type="text"
              placeholder="Write Something"
              className="outline-none w-full py-1 px-2 rounded-sm  border-[#B2BEB5]"
            />
          </p>
        </div>
      </div>
    </>
  );
};
