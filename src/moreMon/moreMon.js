import { useDispatch } from "react-redux";
import { fetchUrls, getNextPage } from "../Redux/dexSlice";
import { useEffect } from "react";

export default function MoreMon () {
    const dispatch = useDispatch

    useEffect(() => {
        dispatch(getNextPage)
    }, [dispatch])

  return (
    <button>Show More</button>
  )
}