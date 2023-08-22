import React, { useState } from "react";
import { Colors } from "../../Constants/ColorConstants";
import { NavBar } from "../../Components/Navigation/index.jsx";
import { Banners } from "../../Components/Banners/index.jsx";
import { gql, useQuery } from "@apollo/client";
import {
  paginateData,
  calculateTotalPages,
  VideoPagination
} from "../../Components/Pagination/index.jsx";
import { VideoPlayer } from "../../Components/ReactPlayer/index.jsx";
import {sortArrayRandomly} from '../../CommonFunctions/sortArrayRandomly';

const PAGE_SIZE = 10;

const GETVIDEOURLS = gql`
  query getVideoUrls {
    getVideoUrls {
      items {
        link
      }
    }
  }
`;

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useQuery(GETVIDEOURLS, {
    fetchPolicy: 'cache-first',
  });
  if (loading) {
    return <h1>Loading</h1>;
  }

  const urls = sortArrayRandomly(data.getVideoUrls.items)
  const videos = urls.map((url) => (
    <VideoPlayer url={url.link} />
  ));

  const totalPages = videos?.length > 0 ? calculateTotalPages(videos, PAGE_SIZE) : 1;
  const paginatedData = videos?.length > 0 ? paginateData(videos, PAGE_SIZE, currentPage) : null

  console.log('urls =', paginatedData)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={homeBackground}>
      <NavBar />
      <Banners />
      <div style={{ margin: "1% 0 0 6%", color: "white" }}>
        <h1>Sex Videos</h1>
      </div>
      <div style={videoContainer}>{!!videos && paginatedData?.map((item) => item)}</div>
      <div style={paginationPosition}>
        <VideoPagination
          page={{
            page: currentPage,
            pageSize: PAGE_SIZE,
            totalPages: totalPages,
          }}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const homeBackground = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: Colors.lightOrange1,
};

const videoContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "90%",
  marginLeft: "5%",
  justifyContent: "space-between",
};

const paginationPosition = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
};
