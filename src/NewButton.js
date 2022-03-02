function NewButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.tapNumber(props.i)}
    >
      {props.i}
    </button>
  );
}

export default NewButton;
