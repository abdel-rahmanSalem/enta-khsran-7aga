import useTgarb from "../contexts/useTgarb";

function List() {
  const { tgarb } = useTgarb();
  if (tgarb.length === 0) return <h1 dir="auto">انت لسه مضفتش حاجه هنا :(</h1>;
  return <h1> List of risks</h1>;
}

export default List;
