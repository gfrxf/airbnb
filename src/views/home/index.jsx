import React, { memo, useEffect, useState } from "react";
import hyRequest from "@/serviews";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";

const home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});

  // 网络请求代码
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);
  return (
    <HomeWrapper>
      <HomeBanner/>
    </HomeWrapper>
  );
});

export default home;
