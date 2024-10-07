import {createStore}  from "redux";
import { combinedProductReducer } from "./CombinedProductReducer";

export const Store=createStore(combinedProductReducer,{});