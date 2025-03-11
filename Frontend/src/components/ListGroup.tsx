function ListGroup() {
  const city = ["Rio de Janeiro", "Nova Iguaçu", "Caxias", "Olaria"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {city.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
