import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { cartActions } from "../redux/slice/cartSlice"
import { favoriteActions } from "../redux/slice/favoriteSlice";
import { visibilityActions } from "../redux/slice/visibilitySlice";

const allActions = {
  ...cartActions,
  ...favoriteActions,
  ...visibilityActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}