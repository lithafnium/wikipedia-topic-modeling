import React, { useEffect, useState } from "react";
import {
  RiArrowLeftSLine,
  RiMenu4Fill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";

import wiki from "wikijs";
import ParseWikipedia from "./parseWikipedia";
import ParseContents from "./parseContents";
import Canvas from "./graph/canvas";
import { FadeIn } from "@app/shared/components/index";
import {
  Container,
  SideBar,
  Input,
  Content,
  ContentInner,
  Inputs,
  Button,
  Contents,
  ContentsInner,
  Heading3,
  Slide,
  SlideButton,
  ArrowDiv,
  Thumbnail,
} from "./styles";

const Dashboard = () => {
  const [pageContent, setPageContent] = useState(null);
  const [pageSummary, setPageSummary] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [showContents, toggleShowContents] = useState(false);
  const [expand, toggleExpand] = useState(false);
  const [thumbnail, setThumbnail] = useState({ x: -1, y: -1, show: false });

  const [showThumbnail, toggleShowThumbnail] = useState(false);
  const [hoverThumbnail, toggleHoverThumbnail] = useState(false);
  const [search, setSearch] = useState("");

  const getContent = async (search: string) => {
    console.log(search);
    await wiki()
      .page(search)
      .then((page: any) => page.summary())
      .then((summary) => {
        setPageSummary(summary);
      });

    await wiki()
      .page(search)
      .then((page: any) => page.content())
      .then((content) => {
        console.log(content);
        setPageContent(content);
      });
  };

  useEffect(() => {
    if (thumbnail.show) toggleShowThumbnail(true);
    else if (!thumbnail.show && hoverThumbnail) {
      toggleShowThumbnail(true);
    } else if (!hoverThumbnail) toggleShowThumbnail(false);
  }, [thumbnail, hoverThumbnail, showThumbnail]);

  return (
    <Container id="container">
      <FadeIn>
        <Canvas setThumbnail={setThumbnail} />
        {/* <div>
          {showThumbnail && (
            <Thumbnail
              onMouseEnter={() => toggleHoverThumbnail(true)}
              onMouseLeave={() => toggleHoverThumbnail(false)}
              x={thumbnail.x}
              y={thumbnail.y}
            />
          )}
        </div> */}
        <SideBar expand={expand}>
          <Inputs>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Wikipedia"
            />
            <Button onClick={() => getContent(search)}>Search</Button>
          </Inputs>
          <Content expand={expand}>
            <ContentInner>
              {pageContent && (
                <FadeIn>
                  <div style={{ position: "relative", zIndex: 10 }}>
                    <ParseWikipedia
                      content={pageContent}
                      summary={pageSummary}
                      title={pageTitle}
                    />
                  </div>
                </FadeIn>
              )}
            </ContentInner>
            <SlideButton
              style={{ width: "100%" }}
              onClick={() => toggleExpand(!expand)}
            >
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" } }}
              >
                <ArrowDiv expand={expand}>
                  <RiArrowDownSLine />
                </ArrowDiv>
              </IconContext.Provider>
            </SlideButton>
          </Content>
          <Contents showContents={showContents}>
            <Slide
              showContents={showContents}
              onClick={() => toggleShowContents(!showContents)}
            >
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" } }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <RiArrowLeftSLine />
                </div>
              </IconContext.Provider>
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" } }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    transition:
                      "opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                    opacity: `${showContents ? 0 : 1}`,
                  }}
                >
                  <RiMenu4Fill />
                </div>
              </IconContext.Provider>
            </Slide>
            <ContentsInner showContents={showContents}>
              {pageContent && (
                <FadeIn>
                  <Heading3>Contents</Heading3>
                  <ParseContents
                    content={pageContent}
                    summary={pageSummary}
                    title={pageTitle}
                  />
                </FadeIn>
              )}
            </ContentsInner>
          </Contents>
        </SideBar>
      </FadeIn>
    </Container>
  );
};

export default Dashboard;
