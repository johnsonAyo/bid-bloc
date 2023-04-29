import React from "react";
import MainNavbar from "../../components/navbars/MainNavbar";
import SearchBar from "../../components/homepage/SearchBar";
import Auctions from "../../components/homepage/Auctions";
import TopAunction from "../../components/homepage/TopAunction";
import { Box, Text } from "@chakra-ui/react";
import { useStateContext } from "../../context";
const AuctionsPage = () => {
  const { address, alerting, setAlert } = useStateContext();
  if (address) {
    setAlert("");
  }
  return (
    <>
      <Text>{alerting}</Text>
      <Box height="100vh">
        {/* <MainNavbar /> */}
        <SearchBar />
        <Auctions />
        <TopAunction />
      </Box>
    </>
  );
};

export default AuctionsPage;
