export const Input = ({handler, value, type, placeholder, className}) => {
  return (
    <input className={className} onChange={handler} value={value} type={type} placeholder={placeholder} />
  );
}
