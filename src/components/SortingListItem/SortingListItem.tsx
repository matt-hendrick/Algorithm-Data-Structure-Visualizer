import './SortingListItem.css';

interface Props {
  size: number | string;
}

const SortingListItem = (props: Props) => {
  const { size } = props;
  return (
    <div className="sorting-list-item-outer-div">
      <div
        className="sorting-list-item-inner-div"
        style={{
          height: size,
        }}
      ></div>
    </div>
  );
};

export default SortingListItem;
