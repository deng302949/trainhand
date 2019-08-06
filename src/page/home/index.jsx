import React from 'react';
import { Carousel } from 'antd';
import './index.less';

const img = [
  { imgUrl: require('../../asset/image/1.jpg') },
  { imgUrl: require('../../asset/image/2.jpg') },
  { imgUrl: require('../../asset/image/3.jpg') },
  { imgUrl: require('../../asset/image/4.jpg') },
  { imgUrl: require('../../asset/image/5.jpg') },
  { imgUrl: require('../../asset/image/6.jpg') },
  { imgUrl: require('../../asset/image/7.jpg') },
  { imgUrl: require('../../asset/image/8.jpg') },
  { imgUrl: require('../../asset/image/9.jpg') }
]

const Home = (props) => {
  const renderImg = (img) => {
    let renderImgList = img.map((item, index) => {
      return (
        <img className="xl-bannerImg" alt="" src={item.imgUrl} key={index}></img>
      )
    })
    return renderImgList;
  } 
  // 大哥啊，你这瞅瞅的轮播把内容遮住了啊
  return (
    <div className="xl-banner" style={{ display: 'none' }}>
      <Carousel 
        className="xl-content"
        autoplay={true}
        dots={false}
      >
        {renderImg(img)}
      </Carousel>
    </div>
  );
}

export default Home;