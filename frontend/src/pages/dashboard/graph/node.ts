import Edge from "./edge";
import { ComponentType } from "react";

interface Node {
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
  id: number;
  neighbors: Array<Node>;
  mouseOver: (x: number, y: number) => void;
  mouseOut: (x: number, y: number) => void;
  dragMove: (
    e: any,
    index: number,
    nodes: Array<Node>,
    edges: Array<Edge>,
    setNodes: (nodes: Array<Node>) => void,
    setEdges: (edges: Array<Edge>) => void
  ) => void;
}

const Node = (function (
  this: Node,
  x: number,
  y: number,
  id: number,
  setThumbnail: (obj: any) => void
) {
  this.x = x;
  this.y = y;
  this.mouseX = 0;
  this.mouseY = 0;
  this.id = id;
  this.neighbors = [];

  this.mouseOver = (x: number, y: number) => {
    document.body.style.cursor = "pointer";
    this.mouseX = x;
    this.mouseY = y;
    setThumbnail({
      x,
      y,
      show: true,
    });
  };

  this.mouseOut = (x: number, y: number) => {
    document.body.style.cursor = "default";
    setThumbnail({
      x: this.mouseX,
      y: this.mouseY,
      show: false,
    });
  };

  this.dragMove = (
    e: any,
    index: number,
    nodes: Array<Node>,
    edges: Array<Edge>,
    setNodes: (nodes: Array<Node>) => void,
    setEdges: (edges: Array<Edge>) => void
  ) => {
    let x = e.target.x();
    let y = e.target.y();

    let updatedNode = new Node(x, y, index, setThumbnail);

    let newEdges = [...edges];

    newEdges = newEdges.map((edge: Edge) => {
      if (edge.from.id === index) edge.from = updatedNode;
      if (edge.to.id === index) edge.to = updatedNode;

      return edge;
    });

    let newNodes = [...nodes];
    newNodes[index] = updatedNode;

    setNodes(newNodes);
    setEdges(newEdges);
  };
} as any) as {
  new (
    x: number,
    y: number,
    id: number,
    setThumbnail: (obj: any) => void
  ): Node;
};

export default Node;
