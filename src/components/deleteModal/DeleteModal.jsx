import Modal from 'react-modal';
import css from "./DeleteModal.module.css";
import Button from '@mui/material/Button';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
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
          <Button variant="outlined" color="success" onClick={onConfirm} className={css.modalBtn}>
            Yes
          </Button>
          <Button variant="outlined" color="error" onClick={onReject} className={css.modalBtn}>
            No
          </Button>
        </div></Modal>
    )
}