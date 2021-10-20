import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Circle, Text, Line } from "react-konva";

import Node from "./node";
import Edge from "./edge";

const Canvas = ({ setThumbnail, response }: any) => {
  const [nodes, setNodes] = useState<Array<Node>>([]);
  const [edges, setEdges] = useState<Array<Edge>>([]);
  const stageRef = useRef(null);

  useEffect(() => {
    if (response) {
      console.log(JSON.stringify(response));
      let { topic_nums, topic_words, word_scores } = response.response;

      generateNodeTopics(topic_nums, topic_words, word_scores);
    }
  }, [response]);

  const generateNodeTopics = (
    topic_nums: any,
    topic_words: any,
    word_scores: any
  ) => {
    let nodes: Array<Node> = [];
    let edges: Array<Edge> = [];
    let index = 0;
    topic_nums.forEach((num: number) => {
      let nodeClusters = [];

      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      // let y = window.innerHeight / 2 - 200 + 200 * num;
      nodeClusters.push(new Node(x, y, `topic: ${num}`, index, setThumbnail));

      let topics = topic_words[num];

      for (let i = 0; i < 10; i++) {
        index++;
        nodeClusters.push(
          new Node(
            120 * Math.cos((Math.PI * i) / 5) + x,
            120 * Math.sin((Math.PI * i) / 5) + y,
            topics[i],
            index,
            setThumbnail
          )
        );
      }

      let edgeClusters = generateEdges(nodeClusters);

      edges.push(...edgeClusters);
      nodes.push(...nodeClusters);

      index++;
    });
    setNodes(nodes);
    setEdges(edges);
  };

  const generateNodes = () => {
    let nodes = [];
    nodes.push(
      new Node(
        window.innerWidth / 2,
        window.innerHeight / 2,
        "test",
        0,
        setThumbnail
      )
    );
    for (let i = 1; i <= 20; i++) {
      nodes.push(
        new Node(
          220 * Math.cos((Math.PI * i) / 10) + window.innerWidth / 2,
          220 * Math.sin((Math.PI * i) / 10) + window.innerHeight / 2,
          "test",
          i,
          setThumbnail
        )
      );
    }

    return nodes;
  };

  const generateEdges = (nodes: Array<Node>) => {
    let edges = [] as Array<Edge>;

    for (let i = 1; i < nodes.length; i++) {
      const node = nodes[i];
      edges.push(new Edge(node, nodes[0], i));
    }

    return edges;
  };

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      const width = window.innerWidth;
      const height = window.innerHeight;
      const stage = stageRef.current;
      if (stage) {
        // @ts-ignore
        stage.width(width);
        // @ts-ignore
        stage.height(height);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const onWheel = (e: any) => {
    const scaleBy = 1.03;
    e.evt.preventDefault();
    const stage = stageRef.current;
    if (stage) {
      // @ts-ignore
      const oldScale = stage.scaleX();
      // @ts-ignore
      const pointer = stage.getPointerPosition();

      const mousePointTo = {
        // @ts-ignore
        x: (pointer.x - stage.x()) / oldScale,
        // @ts-ignore
        y: (pointer.y - stage.y()) / oldScale,
      };

      const newScale =
        e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      // @ts-ignore
      stage.scale({ x: newScale, y: newScale });

      const newX = pointer.x - mousePointTo.x * newScale;
      const newY = pointer.y - mousePointTo.y * newScale;

      console.log(newX, newY);
      // setScale({ x: pointer.x / newX, y: pointer.y / newY });

      const newPos = {
        x: newX,
        y: newY,
      };
      // @ts-ignore
      stage.position(newPos);
    }
  };

  const buildAnchor = (x: number, y: number, index: number) => {
    return (
      <>
        <Circle
          key={index}
          x={x}
          y={y}
          radius={30}
          fill="white"
          stroke="#1e3d59"
          draggable={true}
          onMouseOver={() => {
            const stage = stageRef.current;
            if (stage) {
              // @ts-ignore
              const pointer = stage.getPointerPosition();
              nodes[index].mouseOver(pointer.x, pointer.y);
            }
          }}
          onMouseOut={() => {
            const stage = stageRef.current;
            if (stage) {
              // @ts-ignore
              const pointer = stage.getPointerPosition();
              nodes[index].mouseOut(pointer.x, pointer.y);
            }
          }}
          onDragMove={(e) =>
            nodes[index].dragMove(e, index, nodes, edges, setNodes, setEdges)
          }
        />
        <Text text={`${nodes[index].topic}`} x={x} y={y} />
      </>
    );
  };

  const buildEdge = (from: Node, to: Node, index: number) => {
    return (
      <Line
        key={index}
        strokeWidth={2}
        stroke="#1e3d59"
        lineCap="round"
        opacity={0.3}
        points={[from.x, from.y, to.x, to.y]}
      />
    );
  };

  return (
    <Stage
      ref={stageRef}
      onClick={(e) => console.log(e)}
      onWheel={(e) => onWheel(e)}
      // @ts-ignore
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={true}
    >
      <Layer>
        {edges.map((edge: Edge, index: number) => {
          return buildEdge(edge.from, edge.to, edge.id);
        })}
        {nodes.map((node: Node, index: number) => {
          return buildAnchor(node.x, node.y, node.id);
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
