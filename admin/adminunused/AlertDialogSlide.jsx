// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide() {
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <div className="Delete p-1 rounded-lg bg-red-100" onClick={handleClickOpen}>
//                 <DeleteForeverOutlinedIcon className="text-red-800" />
//             </div>
//             <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
//                 <DialogTitle>{"Delete job ?"}</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-slide-description">Are you sure ? you want to delete this job.</DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>cancel</Button>
//                     <Button onClick={handleClose}>Delete</Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>
//     );
// }
