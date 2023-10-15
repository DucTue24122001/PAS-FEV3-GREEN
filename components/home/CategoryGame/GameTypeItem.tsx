import React from 'react'

const settings = {
  centerMode: false,
  infinite: false,
  slidesToShow: 10,
  slidesToScroll: 10,
  dots: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
const filters = [
  { id: 1, name: "all", value: "" },
  { id: 2, name: "hot", value: "HOT" },
];
const GameTypeItem = () => {
  return (
    <div>GameTypeItem</div>
  )
}

export default GameTypeItem