import React from "react";
import {
  Heading,
  Line,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
} from "./styles";

const ParseWikipedia = ({ content, summary, title }: any) => {
  return (
    <>
      {summary && <Paragraph>{summary}</Paragraph>}
      {content &&
        content.map((section: any, i: number) => {
          return (
            <div>
              <Heading id={`${i + 1}.0`}>
                <Line />
                <Heading1>
                  {i + 1}.0 {section.title}
                </Heading1>
              </Heading>

              <Paragraph>{section.content}</Paragraph>
              {section.items &&
                section.items.map((item: any, j: number) => {
                  return (
                    <div>
                      <Heading id={`${i + 1}.${j + 1}`}>
                        <Line />
                        <Heading2>
                          {i + 1}.{j + 1} {item.title}
                        </Heading2>
                      </Heading>
                      <Paragraph>{item.content}</Paragraph>
                      {item.items &&
                        item.items.map((itemInner: any, z: number) => {
                          return (
                            <div>
                              <Heading id={`${i + 1}.${j + 1}.${z + 1}`}>
                                <Line />
                                <Heading3>
                                  {i + 1}.{j + 1}.{z + 1} {itemInner.title}
                                </Heading3>
                              </Heading>
                              <Paragraph>{itemInner.content}</Paragraph>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}
    </>
  );
};

export default ParseWikipedia;
