import React, { useEffect, useState } from "react";
import VideoFile from "../components/VideoFile";
import { useFetchData } from "../assets/hooks/useFetchData";

export const Video = () => {
  const [cardList, setCardList] = useState([]);
  const [cardList2, setCardList2] = useState([
    {id:1, order: 3, text: "Card 1"},
    {id:2, order: 1, text: "Card 2"}, 
    {id:3, order: 2, text: "Card 3"},
    {id:4, order: 4, text: "Card 4"},
  ]);
  const [currentCard, setCurrentCard] = useState(null)
  const { res: video, refetch } = useFetchData("GET", "video", null, null);
  useEffect(() => {
    let order = 0;
    setCardList(video.map(el => {
      order++;
      return {...el, order: order}
    }));
    
  }, [video]);

  function dragStartHandler(e, card){
    console.log('dragStart', cardList)
    setCurrentCard(card)
  }

  function dragEndHandler(e){
    e.target.style.background = 'white'
  }

  function dragOverHandler(e){
    e.preventDefault();
    e.target.style.background = 'lightgray'
  }

  function dropHandler(e, card){
    e.preventDefault();
    setCardList(cardList.map(item => {
      if (item._id === card._id){
        return {...item, order: currentCard.order}
      }
      if (item._id === currentCard._id){
        return {...item, order: card.order}
      }
      return item
    }))
  }

  const sortCards = (a, b) => {
    if (a.order > b.order){
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="flex justify-between gap-0.5 gap-y-5 flex-wrap pt-4">
      {cardList.sort(sortCards).map(card => {
        return (
          <div 
            key={card._id}
            className="border cursor-grab"
            grabble
            onDragStart={e => dragStartHandler(e, card)}
            onDragLeave={e => dragEndHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={e => dragOverHandler(e)}
            onDrop={e => dropHandler(e, card)}
          >
            <VideoFile movie={card} />
            {/* jingiujhtr {card._id} */}
          </div>
        )
      })}
      {/* {cardList.map((movie) => {
        return <VideoFile 
          key={movie._id}
          movie={movie} 
          onDragStart={(e) => dragStartHandler(e, movie)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, movie)}
          draggable={true}
        />;
      })} */}
      {/* <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
              <video width="320" height="240" controls className="w-full rounded-t-lg">
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
          </a>
          <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
              <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
              </p>
          </div>
      </div> */}
    </div>
  );
};
