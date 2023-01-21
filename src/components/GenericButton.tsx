interface GenericButtonProps {
  children: string;
  onClick: () => void;
  addedClasses?: string;
}

const GenericButton = (props: GenericButtonProps): JSX.Element => {
  const { children, onClick, addedClasses } = props;
  let classesToAdd = '';

  if (addedClasses) classesToAdd = ' ' + addedClasses;

  return (
    <button className={`genericButton${classesToAdd}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default GenericButton;
