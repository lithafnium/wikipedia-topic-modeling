import Node from "./node";

interface Edge {
  // members of your "class" go here
  from: Node;
  to: Node;
  id: number;
}

const Edge = (function (this: Edge, from: Node, to: Node, id: number) {
  this.from = from;
  this.to = to;
  this.id = id;
} as any) as { new (from: Node, to: Node, id: number): Edge };

export default Edge;
