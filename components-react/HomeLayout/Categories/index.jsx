import React from 'react';
import CategoryContent from './CategoryContent';
import { VideoData } from './Data';
import { Container, Wrapper } from './styles';
require('dotenv').config();

function Categories(props) {
  return (
    <Container onClick={props.toLanding}>
      {VideoData?.map((item) => (
        <Wrapper key={item.id}>
          <CategoryContent
            video={item.video}
            defaultImage={item.imageUrl}
            name={item.name}
          />
        </Wrapper>
      ))}
    </Container>
  );
}

export default Categories;
