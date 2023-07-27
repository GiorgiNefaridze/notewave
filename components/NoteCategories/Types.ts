import React from "react";

export interface IProps {
  id: number;
  icon: HTMLImageElement;
  label: string;
  status: string;
  labelColor: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
