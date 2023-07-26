import React from "react";

export interface IProps {
  id: number;
  icon: HTMLImageElement;
  label: string;
  status: string;
  labelColor: string;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
