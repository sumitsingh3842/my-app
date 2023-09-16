import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import MetaDataComponent from './DashBoardAnatomyContent/MetaDataComponent';
import OutputsComponent from './DashBoardAnatomyContent/OutputsComponent';
import ParametersComponent from './DashBoardAnatomyContent/ParametersComponent';
import ResourcesComponent from './DashBoardAnatomyContent/ResourcesComponent';
import MappingsComponent from './DashBoardAnatomyContent/MappingsComponent';
import DescriptionComponent from './DashBoardAnatomyContent/DescriptionComponent';
import RulesComponent from './DashBoardAnatomyContent/RulesComponent';
import ConditionsComponent from './DashBoardAnatomyContent/ConditionsComponent';

import '../../../styles/components/DashBoard/DashBoardBody/DashBoardAnatomy.css'
const anatomies=['Description','MetaData','Parameters','Rules','Mappings','Conditions','Resources','Outputs']

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const anatomyContent: { [key: string]: JSX.Element }={
  Description: <DescriptionComponent />,
  MetaData: <MetaDataComponent />,
  Parameters: <ParametersComponent />,
  Rules: <RulesComponent />,
  Mappings: <MappingsComponent />,
  Conditions: <ConditionsComponent />,
  Resources: <ResourcesComponent />,
  Outputs: <OutputsComponent />,
};
const DashBoardAnatomy: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [selectedAnatomy,setSelectedAnatomy]=React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setSelectedAnatomy(newExpanded?panel:false)
    };

  return (
    <div className="DashBoardAnatomyContainer">
      {anatomies.map((anatomy) => (
        <Accordion expanded={expanded === anatomy} onChange={handleChange(anatomy)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{anatomy}</Typography>
            <HelpIcon />
          </AccordionSummary>
          <AccordionDetails>
          {selectedAnatomy ? anatomyContent[selectedAnatomy] : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default DashBoardAnatomy;