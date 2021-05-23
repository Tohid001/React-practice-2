export default function ToDo({ props }) {
  return (
    <tr>
      <td>
        <label>{props.index}</label>
      </td>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{props.createdAt.toLocaleTimeString()}</label>
      </td>
    </tr>
  );
}
