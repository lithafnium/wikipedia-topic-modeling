import React from "react";
import {
  Heading,
  Line,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from "./styles";

const ParseContents = ({ content, summary, title }: any) => {
  return (
    <>
      {content &&
        content.map((section: any, i: number) => {
          return (
            <div key={i}>
              <ul style={{ paddingInlineStart: "0px" }}>
                <li>
                  <a href={`#${i + 1}.0`}>
                    {i + 1}.0 {section.title}
                  </a>
                </li>
                {section.items &&
                  section.items.map((item: any, j: number) => {
                    return (
                      <ul key={j}>
                        <li>
                          <a href={`#${i + 1}.${j + 1}`}>
                            {i + 1}.{j + 1} {item.title}
                          </a>
                        </li>
                        {item.items &&
                          item.items.map((itemInner: any, z: number) => {
                            return (
                              <ul key={z}>
                                <li>
                                  <a href={`#${i + 1}.${j + 1}.${z + 1}`}>
                                    {i + 1}.{j + 1}.{z + 1} {itemInner.title}
                                  </a>
                                </li>
                              </ul>
                            );
                          })}
                      </ul>
                    );
                  })}
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default ParseContents;
