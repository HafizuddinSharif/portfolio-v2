const Toast = ({ message }: { message: string }) => {
  return (
    <div className="toast toast-center bottom-[60px]">
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
