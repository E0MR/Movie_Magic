import "./Favourite.css";

import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../../store/favSlice";
import { addModal } from "../../store/modalSlice";

function Favourite({ movie }) {
  const user = useSelector((state) => state.auth.user);
  const favourites = useSelector((state) => state.fav.favourites);
  const dispatch = useDispatch();

  const isFav = favourites.some((m) => m.id === movie.id);

  if (!user) {
    return (
      <div
        className="fav remFav"
        title="Login to add favourites"
        onClick={() =>
          dispatch(
            addModal({
              type: "info",
              message: "Please login to use favourites.",
            })
          )
        }
      >
        <span>&#9734;</span>
      </div>
    );
  }

  const handleAddFav = () => {
    if (isFav) {
      dispatch(
        addModal({
          type: "confirm",
          title: "Confirm Remove Favourite",
          message: "Are you sure you want to remove the movie from favourites?",
          disableAutoClose: true,
          actionType: "remove-favourite",
          payload: movie,
        })
      );
    } else {
      dispatch(toggleFav(movie));
      dispatch(
        addModal({
          type: "info",
          message: "Added to favourites successfully.",
        })
      );
    }
  };

  return (
    <div
      className={`fav ${isFav ? "addFav" : "remFav"}`}
      onClick={handleAddFav}
    >
      {isFav ? <span>&#9733;</span> : <span>&#9734;</span>}
    </div>
  );
}

export default Favourite;
