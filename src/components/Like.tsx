import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <div>
      {liked ? (
        <FcLike onClick={handleLike} size={50} />
      ) : (
        <FcLikePlaceholder onClick={handleLike} size={50} />
      )}
    </div>
  );
};

export default Like;
