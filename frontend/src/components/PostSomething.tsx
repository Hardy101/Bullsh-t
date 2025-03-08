import { MEDIA } from "../constants/media";

export const PostSomething: React.FC = () => {
  return (
    <>
      <div className="flex gap-2">
        <img src={MEDIA.ANONYM} alt="anonymous" className="w-16" />
        <div>
          <p></p>
          <p>
            <input type="text" placeholder="Write Something" />
          </p>
        </div>
      </div>
    </>
  );
};
