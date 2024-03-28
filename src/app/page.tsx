"use client";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import Title from "@/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react";
import Container from "@/components/Container";
import ScrollObserver from "@/components/ScrollObserver/ScrollSlide";
import ScrollSlide from "@/components/ScrollObserver/ScrollSlide";
import Scroller from "@/components/ScrollObserver/Scroller";

export default function Home() {
  return (
    <main>
      <Button theme={{
        initial: 'primary',
        sm: 'secondary',
        md: 'warning',
        lg: 'danger',
    }}
    size="calc"
    rounded
    screen-position={"right-bottom"}
    onClick={() => {
      console.log("Button clicked");
    }}
    >
      <a className="flex justify-center justify-item-center">
        <FontAwesomeIcon icon={SolidIcon.faDoorOpen} className="h-4 w-4 mt-1 mr-1" /><div> | ログイン</div>
      </a>
    </Button>
        <Scroller snaptype="mandatory">
          <ScrollSlide scrollsnap="start">
            <div className="h-full bg-[url('/sakura.jpg')] bg-cover">
              <div className="snap-start h-screen w-screen bg-black/15">
                <Title center color="white">アイデア就活とは</Title>
                {/* <div className="container mx-auto px-16">
                  <p className="text-white text-xl text-center">アイデア就活では、投稿いただいたアイデアをもとに<br/>あなたにあった企業を紹介することで<br/>あなたの就活を支援します</p>
                </div>
                <Container rounded="xl" relative className="p-8">
                  <Grid cols={3}>
                    {[{
                      name: "履歴書",
                      icon: SolidIcon.faFileLines
                    },{
                      name: "学歴",
                      icon: SolidIcon.faSchool
                    },{
                      name: "資格",
                      icon: SolidIcon.faBook
                    }].map((item,index) => {
                      return (
                        <div key={index} className="icon-border">
                          <p className="text-center font-bold text-xl py-3">{item.name}</p>
                          <FontAwesomeIcon icon={item.icon} className="size-12" color="white"/>
                        </div>
                      )
                    })}
                  </Grid>
                </Container> */}
              </div>
            </div>
          </ScrollSlide>
          <ScrollSlide scrollsnap="center">
            <h2 className="text-center text-[1.5rem] font-extrabold">学歴も、履歴書も必要ない。<br/>アイデアで内定獲得へ</h2>
          </ScrollSlide>
          <ScrollSlide scrollsnap="start">
            <div>
              <h2 className="text-center text-[1.5rem] font-extrabold">新規登録はこちら</h2>

            </div>
            <div>
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-[1.5rem] font-extrabold">運営挨拶</h2>
                  <div className="border border-black rounded-xl">
                    <FontAwesomeIcon icon={SolidIcon.faUser} className="size-24 flex p-8 ml-12 bg-slate-300 rounded-full" color="white"/>
                  </div>
                </div>
                <div>
                  <p>
                    初めまして、運営の（広報/営業担当）の石井です。<br/>  
                    私たちは現在、大学生5人で活動しています。<br/>
                    プロジェクトのスタートは2023年3月で、12月には<br />
                    「第11回とちぎアントレプレナーコンテスト」で最優秀賞をいただきました。<br />
                    <br /> 
                    学生5人だけかと驚かれるかもしれませんが、このプロジェクトが始まるまで、<br />
                    私たちはただただ「普通」の大学生でした。<br />
                    しかし不思議にも、全員一致で面白いと思えるアイデアが生まれてから、<br />
                    アイデアを発展させるアイデアの連続で、いよいよここまで辿り着きました。<br/>
                    <br/>
                    AIは何百回と使いましたし、これまで何人もの方にフィードバックを頂きました。<br/>
                    そのたびに改善を重ねていますが、いつになっても終わらない途方のない毎日です。<br/>
                    しかし私たちはこの活動を楽しんでいます!<br/>
                    <br />
                    こうして仕事を楽しむコツを探し考えること、これもまた1つのアイデアです。<br/>
                    同世代のみなさんにも創造力に自信を持って「労働を楽しんでほしいと思い、<br />
                    発想力を起点にした就活サイトを立ち上げました。<br/>
                    <br />
                    ぜひアイデアを出すこと、磨くことを楽しみ、その先にある就活を「ついでに」<br/>
                    楽しんでいただければ幸いです。
                  </p>
                </div>
              </div>
            </div>
          </ScrollSlide>
        </Scroller>
    </main>
  );
}
