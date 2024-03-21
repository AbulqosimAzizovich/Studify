import { TableHeaderProp } from "../../../Types/CommonComponentType";

const TableHead = ({ headeData }: TableHeaderProp) => {
  return (
    <thead>
      <tr>
        {headeData &&
          headeData.map((item, index) =>
            item.class ? (
              <th key={index} className={item.class}>
                {item.name}
              </th>
            ) : (
              <th key={index}>{item.name}</th>
            )
          )}
      </tr>
    </thead>
  );
};
export default TableHead;
