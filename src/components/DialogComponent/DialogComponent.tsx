import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DialogComponent = ({
  isOpen,
  title,
  description,
  onCancel,
  onConfirm,
}: {
  isOpen: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      PaperProps={{ sx: { padding: '10px 20px' } }}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', padding: '16px 24px' }}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
