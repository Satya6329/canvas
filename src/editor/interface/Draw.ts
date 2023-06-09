import { EditorZone } from '../dataset/enum/Editor'
import { IElement, IElementPosition } from './Element'
import { IRow } from './Row'

export interface IDrawOption {
  curIndex?: number;
  isSetCursor?: boolean;
  isSubmitHistory?: boolean;
  isCompute?: boolean;
  isLazy?: boolean;
}

export interface IDrawImagePayload {
  width: number;
  height: number;
  value: string;
}

export interface IDrawRowPayload {
  elementList: IElement[];
  positionList: IElementPosition[];
  rowList: IRow[];
  pageNo: number;
  startIndex: number;
  innerWidth: number;
  zone?: EditorZone;
}

export interface IDrawPagePayload {
  elementList: IElement[];
  positionList: IElementPosition[];
  rowList: IRow[];
  pageNo: number;
}

export interface IPainterOptions {
  isDblclick: boolean;
}