const TextArea = ({ children, ...props }) => {
  return <textarea {...props}>{children}</textarea>;
};

export default TextArea;
