import {combineReducers} from 'redux';
import { Reducer } from './Reducer';

export const combinedProductReducer=combineReducers({productData:Reducer});