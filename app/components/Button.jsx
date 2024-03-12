export default function Button({
  children,
  isDelete,
  onClick,
  type,
  action,
  method,
  className = "",
}) {
  const baseClass = "rounded-md text-sm font-semibold shadow-sm";
  const deleteClass = "bg-red-500 px-3 py-2 text-white hover:bg-red-400";
  const defaultClass = "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2";

  const buttonClass = `${baseClass} ${
    isDelete ? deleteClass : defaultClass
  } ${className}`;

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      type={type}
      action={action}
      method={method}
    >
      {children}
    </button>
  );
}
