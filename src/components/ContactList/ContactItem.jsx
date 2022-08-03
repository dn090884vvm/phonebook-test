export const ContactItem = ({
  onDeleteContact,
  contact: { id, name, number },
}) => {
  return (
    <li>
      <p>{`${name} : ${number}`}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
