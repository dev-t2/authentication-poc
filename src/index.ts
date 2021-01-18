import * as cryptoJS from 'crypto-js';

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => {
    return cryptoJS.SHA256(index + previousHash + data + timestamp).toString();
  };

  static validateStructure = (block: Block): boolean => {
    return (
      typeof block.index === 'number' &&
      typeof block.hash === 'string' &&
      typeof block.previousHash === 'string' &&
      typeof block.data === 'string' &&
      typeof block.timestamp === 'number'
    );
  };

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

const getHash4Block = (block: Block): string => {
  return Block.calculateBlockHash(block.index, block.previousHash, block.data, block.timestamp);
};

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHash4Block(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

export {};
