import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";

const ModalProvider = ({
  children,
  open,
  handleClose,
  style,
}: {
  children: ReactNode;
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style ? { ...style } : {}}>{children}</Box>
    </Modal>
  );
};

export default ModalProvider;
