import React, { memo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';

//  Store
import { getTotalPages } from '../../../store/flights/selectors';
import { Actions } from '../../../store/flights/actions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        flex: 1,
        marginTop: theme.spacing(2),
        marginBottom: '5%',
      },
    },
  }),
);
const FlyPagination = memo(() => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const classes = useStyles();

  const totalPages = useSelector(getTotalPages);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(Actions.sortPage(value.toString()));
  };

  return (
    <div className={classes.root}>
      <Pagination
        onChange={handleChangePage}
        count={Number(totalPages)}
        variant='outlined'
        page={page}
        shape='rounded'
      />
    </div>
  );
});

export default FlyPagination;
