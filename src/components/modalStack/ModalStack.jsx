import "./ModalStack.css";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModal, removeModal } from "../../store/modalSlice";
import { logout } from "../../store/authSlice";
import { toggleFav } from "../../store/favSlice";

// import { useNavigate } from "react-router-dom";

const ModalStack = () => {
  const modals = useSelector((state) => state.modals);
  return (
    <div className="modal-stack">
      {modals.map((modal) => (
        <ModalItem key={modal.id} modal={modal} />
      ))}
    </div>
  );
};

const ModalItem = ({ modal }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Skip auto-close if it's a confirm modal
  useEffect(() => {
    if (modal.disableAutoClose || modal.type === "confirm") return;
    const timer = setTimeout(() => {
      dispatch(removeModal(modal.id));
    }, modal.duration);
    return () => clearTimeout(timer);
  }, [modal, dispatch]);

  const handleConfirm = () => {
    if (modal.actionType === "logout-confirm") {
      dispatch(logout());
      // setTimeout(() => {
      //   navigate("/home", { replace: true });
      // }, 0);
    } else if (modal.actionType === "remove-favourite" && modal.payload) {
      dispatch(toggleFav(modal.payload));
      dispatch(
        addModal({
          type: "info",
          message: "Removed from favourites successfully.",
        })
      );
    }

    dispatch(removeModal(modal.id));
  };

  const handleCancel = () => {
    if (modal.onCancel) modal.onCancel();
    dispatch(removeModal(modal.id));
  };

  if (modal.type === "confirm") {
    return (
      <div className={`modal confirm`}>
        <div className="all">
          {modal.title && <div className="modal-title">{modal.title}</div>}
          <div className="modal-content">{modal.message}</div>
          <div className="modal-buttons">
            <button
              type="button"
              className="btn confirm"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button type="button" className="btn cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`modal ${modal.type}`}>
      <button
        type="button"
        className="close-btn"
        onClick={() => dispatch(removeModal(modal.id))}
      >
        ×
      </button>
      <div className="modal-content">{modal.message}</div>
      <div
        className="modal-timer-bar"
        style={{ animationDuration: `${modal.duration}ms` }}
      />
    </div>
  );
};

export default ModalStack;
