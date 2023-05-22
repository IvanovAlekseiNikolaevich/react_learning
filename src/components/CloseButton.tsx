interface CloseButtonProps {
  onCloseClick: () => void;
}

const CloseButton = ({ onCloseClick }: CloseButtonProps) => {
  return (
    <button
      type="button"
      className="btn-close "
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onCloseClick}
    ></button>
  );
};
export default CloseButton;
