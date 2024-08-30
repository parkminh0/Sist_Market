export default function ProductList({ ar }) {
  return (
    <>
      {ar.map((data, index) => (
        <tr>
          <td>{data.postkey}</td>
          <td>{data.userkey}</td>
          <td>{data.townkey}</td>
          <td>{data.categorykey}</td>
          <td>{data.title}</td>
          <td>{data.method}</td>
          <td>{data.price}</td>
          <td>{data.lastprice}</td>
          <td>{data.content}</td>
        </tr>
      ))}
    </>
  );
}
