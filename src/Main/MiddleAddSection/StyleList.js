import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const StyledColumn = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  marginRight: theme.spacing(2),
  margin: theme.spacing(5),
}));
export const StyledBoard = styled('div')({
  display: 'flex',
  overflowX: 'auto',
  padding: '8px',
  width:'100%'
});

export const StyledContainer = styled('div')({
  maxWidth: '100%',
  margin: '80 %',
  padding: '16px',
});