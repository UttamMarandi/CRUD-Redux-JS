import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, clearStudent } from "../../redux/features/studentSlice";

const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent()); //whenver a component is unmounted this runs
    };
  }, []);
  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, address, id, phone } = student;
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>
    </Paper>
  );
};

export default Student;
