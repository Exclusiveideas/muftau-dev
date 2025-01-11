import TextRevealByWord from "@/app/components/textRevealByWord";
import "./comment.css";
import { useEffect } from "react";
import useInView from "@/utils/hooks/useInView";
import useHomeStore from "@/store/homeStore";

const Comment = ({ comment, index }) => {
  // const commentWrapperRef = useRef(null);
  const [isInView, elementRef] = useInView();
  
  const setActiveCommentIndex = useHomeStore((state) => state.setActiveCommentIndex);

  useEffect(() => {
    if (isInView) {
      setActiveCommentIndex(index)
    }
  }, [isInView])

  

  return (
    <div ref={elementRef} className="comment-wrapper">
      <div className="quote-marks">
        <p>❝</p>
      </div>
      <TextRevealByWord
        text={comment?.comment}
        className="commentTxt"
        section="clients"
        altTargetRef={elementRef}
      />
      <div className="commenterInfo">
        <p className="commenterName">{comment?.name}</p>
        <p className="commenterPosition">
          <span>{comment?.position}</span>
          <span>{comment?.company}</span>
        </p>
      </div>
      <hr className="WTS-line" />
    </div>
  );
};
 
export default Comment;
