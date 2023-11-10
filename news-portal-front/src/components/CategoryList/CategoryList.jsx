import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
    sx={{padding: 0}}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(0),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CategoryList = () => {
    const categories = useSelector(state => state.categories)
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Accordion expanded={expanded} onChange={handleChange()}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                    <Typography>Категории</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='sidebar__list'>
                        {categories.map((el) => (<Link to={`/${el.category_id}`} key={el.title+el.category_id}><li className='sidebar__lists' key={el.title} >{el.category_name}</li></Link>))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CategoryList