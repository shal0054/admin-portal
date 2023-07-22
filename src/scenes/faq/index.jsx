import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently asked questions' />

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Another Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						The Most Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						A Common Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Your Favorite Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						The Final Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						cum tempore amet itaque repellat ratione soluta aperiam vel, impedit
						distinctio non ducimus rerum voluptatibus vero nostrum quae tempora
						nam odio.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
