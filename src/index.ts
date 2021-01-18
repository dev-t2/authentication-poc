class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const rootBlock: Block = new Block(0, '0401', '', 'TypeScript', 210118);

const blockChain: [Block] = [rootBlock];

console.log(blockChain);

export {};
