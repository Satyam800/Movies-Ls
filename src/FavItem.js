import { Constant, IMG_URL } from "./Constant";
import { addItem, RemoveItem, setItem } from "./CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const FavItem = (props) => {
  const cartItem = useSelector((store) => store.Favourite.item);

  const dispatch = useDispatch();

  console.log(cartItem);

  const handleremFav = (item) => {
    dispatch(RemoveItem(item));
    dispatch(setItem(item));
    console.log(cartItem, "zzz");
    // let check=JSON.parse(localStorage.getItem("Fav"))
    // check.map((items)=>{
    //  if( items.id==item?.id){
    //   localStorage.removeItem()
    //  }
    // })

    JSON.parse(localStorage.getItem("Fav"));
  };

  const isFavourite = (item) => {
    const index = cartItem.indexOf(item);
    if (index == -1) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="w-80  h-84  bg-white mb-10 rounded-lg ">
        <div className="w-80  h-80   ">
          <img className="w-80  h-80" src={IMG_URL + props.item?.poster_path} />
        </div>

        <span className="text-xl ">{props.item?.title}</span>

        <div className="bg-green-100 rounded-lg w-80 text-xl text-center absolute ">
          <button onClick={() => handleremFav(props.item)}>
            {" "}
            ADD TO UNFAVOURITE
          </button>
        </div>
      </div>
    </>
  );
};

export default FavItem;
