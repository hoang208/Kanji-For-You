import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dictionary() {
const dispatch = useDispatch();
const kanji = useSelector(store=>store.kanji)

useEffect(() => {
    dispatch({ type: "GET_KANJI" });
  }, []);

}
