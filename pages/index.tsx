import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import AljieudumMap from "../public/images/aljieudum.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageContainer = styled.div`
  width: 30vw;
  position: relative;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: gray;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Home: NextPage = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <ImageContainer>
          <Image
            src={AljieudumMap}
            alt="map of aljieudum"
            layout="responsive"
            unoptimized={true}
          />
          <Loading />
        </ImageContainer>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Home;
