const ContextMenu = ({ styles }) => {
  return (
    <div className="context-menu" style={styles}>
      <div>
        <i className="fa fa-edit"></i>
        <span>ویرایش</span>
      </div>
      <div>
        <i className="fa fa-paper-plane"></i>
        <span>ثبت</span>
      </div>
    </div>
  );
};
export default ContextMenu;
