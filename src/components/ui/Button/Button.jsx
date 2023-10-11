export const Button = ({ handler, children, className }) => {
  return (
    <button onClick={handler} className={className}>
      {children}
    </button>
  );
};
