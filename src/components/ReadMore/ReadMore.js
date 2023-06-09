import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./ReadMore.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ReadMore({ text, maxLength = 300 }) {
  const [isTruncated, setIsTruncated] = useState(text?.length < maxLength);
  return <>
    <div>
      <p>{isTruncated ? `${text?.slice(0, maxLength)}....` : text}</p>
    </div>
    <div className={cx("JobDescription__ReadButton")}>
      <button type="button" className={cx("ButtonStyle__Button", "ButtonStyle__LinkBtn")}
        onClick={() => {
          setIsTruncated(!isTruncated);
        }} >
        <span>{isTruncated ? "Xem thêm" : "Ẩn bớt"}</span>
        <span className={cx("ButtonStyle__EndIconContainer")}>
          <FontAwesomeIcon icon={isTruncated ? faAngleDown : faAngleUp} className={cx("IconStyle__VerticalCenteredSvg")} />
        </span>
      </button>
    </div>
  </>
}

export default ReadMore;

{/* <div className={cx("JobDescription__DescriptionContainer")}>
  <div className={cx("DraftEditorContainer__DraftEditorContainer")}>
    <div className={cx("DraftEditor-root")}>
      <div className={cx("DraftEditor-editorContainer")}>
        <div className={cx("public-DraftEditor-content")}>
          {text}
        </div>
      </div>
    </div>
  </div>
</div> */}
