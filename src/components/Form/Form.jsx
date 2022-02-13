import {useState} from "react";




const Form = ({onSubmit}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const handlChang = (event) => {
  event.preventDefault();
  if (event.target.name === 'name') {
    setName(event.currentTarget.value)
  }else 
  if (event.target.name === 'number'){
    setNumber(event.currentTarget.value)
  }
}

  const handlSubmitData = (event) => {
  event.preventDefault();
  const data = {
    name: name,
    number: number,
  };
  onSubmit(data);
  setName("")
  setNumber("")
  };

  return (
    <form onSubmit={handlSubmitData}>
      <label> Name: </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handlChang}
      />
      <label> Telephone: </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handlChang}
      />
      <button type="submit"> Add contact </button>
    </form>
  )
}

export default Form