const GenericButton = (props: {
  children: string;
  onClick: () => void;
  addedClasses?: string;
}) => {
  const { children, onClick, addedClasses } = props;
  return (
    <button className={`genericButton ${addedClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default GenericButton;
