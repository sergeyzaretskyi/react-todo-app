const Text = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default Text;
