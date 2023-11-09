import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import Head from "../../components/head/Head";
import PastBg from "../../assets/images/background/mailboxPast.png";
import PresentBg from "../../assets/images/background/mailboxPresent.png";
import FutureBg from "../../assets/images/background/mailboxFuture.png";
import Accordion from "../../components/accordion/Accordion";
import WriteIcon from "../../assets/images/icon/write.png";
import ShareIcon from "../../assets/images/icon/share.png";
import AlertIcon from "../../assets/images/icon/alert.png";

function Mailbox() {
  const { state } = useLocation();
  const data = state && state.data;

  const [time, setTime] = useState(data);
  const [showShareAlert, setShowShareAlert] = useState(false);

  const getBackgroundColor = time => {
    if (time === "past") return "#F0D890";
    else if (time === "present") return "#810006";
    else if (time === "future") return "#083A00";
  };

  const getColor = time => {
    if (time === "past") return "#000000";
    else return "#FFFFFF";
  };

  const setBackgroundImg = time => {
    if (time === "past") return PastBg;
    else if (time === "present") return PresentBg;
    else if (time === "future") return FutureBg;
  };

  // 공유하기 버튼 클릭 시 말풍선 출력
  const handleShareClick = () => {
    // 주소에서 "mailbox" 부분을 제외한 주소 생성
    const shareLink = `${window.location.origin}`;

    // 클립보드에 주소 복사
    const temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.value = shareLink;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    setShowShareAlert(true);

    setTimeout(() => {
      setShowShareAlert(false);
    }, 2000);
  };

  return (
    <>
      <S.MailboxWrapper bgimg={setBackgroundImg(time)}>
        <Head bgcolor={getBackgroundColor(time)} color={getColor(time)} />
        <S.TimeTabWrapper color={getColor(time)}>
          <S.TimeTab
            onClick={() => setTime("past")}
            borderbottom={time === "past" ? "#000" : "none"}
          >
            과거
          </S.TimeTab>
          <S.TimeTab
            onClick={() => setTime("present")}
            borderbottom={time === "present" ? "#fff" : "none"}
          >
            현재
          </S.TimeTab>
          <S.TimeTab
            onClick={() => setTime("future")}
            borderbottom={time === "future" ? "#fff" : "none"}
          >
            미래
          </S.TimeTab>
        </S.TimeTabWrapper>
        <Accordion />
        <Accordion /> <Accordion /> <Accordion /> <Accordion /> <Accordion />
        <S.MailboxWriterWrapper to={`/${time.toLowerCase()}`}>
          <S.MailboxWriterIcon src={WriteIcon} alt="작성 아이콘" />

          <S.MailboxWriter>작성하기</S.MailboxWriter>
        </S.MailboxWriterWrapper>
        <S.MailboxShareAlert src={AlertIcon} visible={showShareAlert} />
        <S.MailboxShareWrapper onClick={handleShareClick}>
          <S.MailboxShareIcon src={ShareIcon} alt="공유 아이콘" />
        </S.MailboxShareWrapper>
      </S.MailboxWrapper>
    </>
  );
}

export default Mailbox;
