import cl from "../styles/modal.module.css";
function modal({ children, visible, setVisible }) {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.modalcontent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
export default modal;
