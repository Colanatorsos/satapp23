import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { cartActions } from "../redux/slice/cartSlice";
import { favoriteActions } from "../redux/slice/favoriteSlice";
import { visibilityActions } from "../redux/slice/visibilitySlice";
import { userAction } from "../redux/slice/userSlice";
import { postsAction } from "../redux/slice/postsSlice";

const allActions = {
    ...cartActions,
    ...favoriteActions,
    ...visibilityActions,
    ...userAction,
    ...postsAction,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};
