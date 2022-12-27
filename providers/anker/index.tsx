import React, { useState, useEffect } from 'react';
import AnkrscanProvider from '@ankr.com/ankr.js';

const provider = new AnkrscanProvider(' ');

export const getNfts = async (address: string) => {
  const { assets } = await provider.getNFTsByOwner({
    walletAddress: address,
    blockchain: ['eth', 'polygon', 'bsc'],
  });
  return {
    nfts: assets,
  };
};

export const getNftMetadata = async (address: string, tokenId: string) => {
  return await provider.getNFTMetadata({
    blockchain: 'eth',
    contractAddress: address,
    tokenId: tokenId,
  });
};
