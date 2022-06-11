import { useLocation, useParams } from "react-router-dom";

export const CategoryDetail = (props: any) => {
  const { id } = useParams();
  console.log(id);
  return(
    <div>
      ...
    </div>
  );
}