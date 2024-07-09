class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => a[0] - b[0]);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class Graph {
  constructor(V) {
    this.V = V;
    this.adj = new Array(V).fill().map(() => []);
  }

  addEdge(u, v, w) {
    this.adj[u].push([v, w]);
    this.adj[v].push([u, w]);
  }

  shortestPath(src, des) {
    const pq = new PriorityQueue();
    const dist = new Array(this.V).fill(Infinity);
    const origem = new Array(this.V);

    // custo, origem, destino
    pq.enqueue([0, src]);

    dist[src] = 0;
    origem[src] = null;

    while (!pq.isEmpty()) {
      const [uDist, u] = pq.dequeue();

      // u = origem, v = destino, weigth = custo
      for (const [v, weight] of this.adj[u]) {
        if (dist[v] > dist[u] + weight) {
          dist[v] = dist[u] + weight;
          pq.enqueue([dist[v], v]);
          origem[v] = u;
        }
      }
    }

    var caminho = [];
    for (var a = des; a != src; a = origem[a]) {
      caminho.push(origem[a]);
    }
    caminho.reverse();
    caminho.push(des);

    return { custo: dist[des], caminho };
  }
}

// Driver program to test methods of the graph class
function main(s, t, g) {
  // origem, destino, custo

  g.addEdge(0, 1, 16);
  g.addEdge(0, 5, 16);
  g.addEdge(0, 6, 12);

  g.addEdge(1, 0, 16);
  g.addEdge(1, 5, 8);
  g.addEdge(1, 2, 29);
  g.addEdge(1, 7, 50);

  g.addEdge(2, 1, 29);
  g.addEdge(2, 3, 55);

  g.addEdge(3, 2, 55);
  g.addEdge(3, 7, 23);
  g.addEdge(3, 8, 19);
  g.addEdge(3, 9, 26);
  g.addEdge(3, 4, 21);

  g.addEdge(4, 3, 21);
  g.addEdge(4, 3, 36);

  g.addEdge(5, 10, 16);
  g.addEdge(5, 1, 8);
  g.addEdge(5, 7, 21);
  g.addEdge(5, 11, 10);
  g.addEdge(5, 18, 19);

  g.addEdge(6, 0, 12);
  g.addEdge(6, 18, 9);
  g.addEdge(6, 17, 18);

  g.addEdge(7, 5, 21);
  g.addEdge(7, 1, 50);
  g.addEdge(7, 3, 23);
  g.addEdge(7, 10, 9);
  g.addEdge(7, 11, 12);
  g.addEdge(7, 8, 13);

  g.addEdge(8, 3, 19);
  g.addEdge(8, 7, 13);
  g.addEdge(8, 9, 28);
  g.addEdge(8, 10, 16);

  g.addEdge(9, 4, 36);
  g.addEdge(9, 3, 26);
  g.addEdge(9, 8, 28);
  g.addEdge(9, 14, 16);

  g.addEdge(10, 7, 9);
  g.addEdge(10, 8, 16);
  g.addEdge(10, 11, 5);
  g.addEdge(10, 12, 11);

  g.addEdge(11, 7, 12);
  g.addEdge(11, 10, 5);
  g.addEdge(11, 5, 10);
  g.addEdge(11, 12, 10);
  g.addEdge(11, 15, 10);

  g.addEdge(12, 13, 12);
  g.addEdge(12, 10, 11);
  g.addEdge(12, 15, 3);
  g.addEdge(12, 11, 10);

  g.addEdge(13, 14, 18);
  g.addEdge(13, 11, 12);
  g.addEdge(13, 15, 14);
  g.addEdge(13, 17, 31);
  g.addEdge(13, 16, 26);

  g.addEdge(14, 9, 16);
  g.addEdge(14, 13, 18);
  g.addEdge(14, 16, 33);

  g.addEdge(15, 11, 10);
  g.addEdge(15, 12, 3);
  g.addEdge(15, 13, 14);
  g.addEdge(15, 16, 18);
  g.addEdge(15, 17, 23);

  g.addEdge(16, 14, 33);
  g.addEdge(16, 13, 26);
  g.addEdge(16, 15, 18);
  g.addEdge(16, 17, 11);

  g.addEdge(17, 15, 23);
  g.addEdge(17, 13, 31);
  g.addEdge(17, 16, 11);
  g.addEdge(17, 18, 23);
  g.addEdge(17, 6, 18);

  g.addEdge(18, 17, 23);
  g.addEdge(18, 5, 9);
  g.addEdge(18, 6, 9);

  const resultado = g.shortestPath(s, t);
  return resultado;
}

export { Graph, main };
