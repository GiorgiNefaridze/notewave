interface IProps {
  (index: number, page: number): number;
}

export const calculateProgress: IProps = (index, page) => {
  return index / page;
};
