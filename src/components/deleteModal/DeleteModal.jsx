import Modal from 'react-modal';
import css from "./DeleteModal.module.css";
import clsx from 'clsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, onReject, onConfirm }) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onReject}
        style={customStyles}
        >
        <h2 className={css.modalTittle}>Are you sure?</h2>
        <div className={css.modalTittleBtnBox}>
            <button onClick={onConfirm} className={clsx(css.modalBtn, css.modalBtnConfirm)}>
            Yes
            </button>
            <button onClick={onReject} className={clsx(css.modalBtn, css.modalBtnReject)}>
            No
            </button>
        </div></Modal>
    )
}