import React from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import FutureIcon from "../../assets/images/character/future.png";

function Future() {
  return (
    <>
      <S.FutureWrapper>
        <Head />
        <S.FutureQuestion>
          Q. 미래 수연은 <br />
          어떻게 성장해 있을까요?
        </S.FutureQuestion>
        <Send
          icon={FutureIcon}
          iconsize={"132px"}
          top={"-40px"}
          right={"30px"}
        />
      </S.FutureWrapper>
    </>
  );
}

export default Future;
