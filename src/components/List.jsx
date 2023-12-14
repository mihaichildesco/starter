import Person from "./Person";

function List(props) {
  const { people } = props;

  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
}
export default List;
