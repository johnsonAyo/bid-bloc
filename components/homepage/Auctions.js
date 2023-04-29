import React, {useEffect} from "react";
import { Flex, Text } from "@chakra-ui/react";
import AuctionCards from "./AuctionCard";
import { useStateContext } from '../../context';

const Auctions= () => {
  const {allNfts, getAllNFTs} = useStateContext();
  useEffect(()=>{
    getAllNFTs();
  });
  return (
    <>
      <Flex justifyContent="space-between" marginX={10} marginTop={9}>
        <Text fontSize="2xl" color="red">
          Live Auction
        </Text>
        <Text fontSize="md"> See All</Text>
      </Flex>
   
      <Flex marginX="20" marginTop={10}>
        {allNfts.map((value, index) => {
            return <AuctionCards data={value} key={index}></AuctionCards>;
        })}
      </Flex>

      <Flex justifyContent="space-between" marginX={10}>
        <Text fontSize="2xl" color="red">
          Upcoming Auction
        </Text>
        <Text fontSize="md"> See All</Text>
      </Flex>
   
      <Flex marginX="20" marginTop={10}>
        {allNfts.map((value, index) => {
            return <AuctionCards data={value} key={index}></AuctionCards>;
        })}
      </Flex>

      <Flex justifyContent="space-between" marginX={10}>
        <Text fontSize="2xl" color="red">
          Todays Pick
        </Text>
        <Text fontSize="md"> See All</Text>
      </Flex>
   
      <Flex marginX="20" marginTop={10}>
        {allNfts.map((value, index) => {
            return <AuctionCards data={value} key={index}></AuctionCards>;
        })}
      </Flex>

      <Flex justifyContent="space-between" marginX={10}>
        <Text fontSize="2xl" color="red">
          New Auction
        </Text>
        <Text fontSize="md"> See All</Text>
      </Flex>
   
      <Flex marginX="20" marginTop={10}>
        {allNfts.map((value, index) => {
            return <AuctionCards data={value} key={index}></AuctionCards>;
        })}
      </Flex>
    </>
  );
};

export default Auctions;
