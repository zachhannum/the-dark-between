import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import styled from "styled-components";
import AljieudumMap from "../../public/images/aljieudum.jpg";

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

const Map = () => {
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

export default Map;
