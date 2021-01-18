import * as cryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => {
    return cryptoJS.SHA256(index + previousHash + data + timestamp).toString();
  };

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const rootBlock: Block = new Block(0, '0401', '', 'TypeScript', 210118);
const blockChain: Block[] = [rootBlock];

const getBlockChain = (): Block[] => {
  return blockChain;
};

const getLatestBlock = (): Block => {
  return blockChain[blockChain.length - 1];
};

const getNewTimeStamp = (): number => {
  return Math.round(new Date().getTime() / 1000);
};

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    newTimestamp
  );
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

  return newBlock;
};

console.log(createNewBlock('hello'), createNewBlock('bye'));

export {};
