import React, { useEffect, useMemo } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { normalizeText } from 'normalize-text';

const StyledStepper = styled(Stepper)`
  && {
    width: 300px;

    .MuiStep-root {
      display: flex;
      align-items: center;
      justify-content: center;

      .MuiStepLabel-root.MuiStepLabel-alternativeLabel {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing(0.5)};
      }

      .MuiStepLabel-labelContainer {
        display: flex;
        align-items: center;
        margin-left: ${({ theme }) => theme.spacing(0.5)};
      }

      .MuiStepLabel-label,
      .MuiStepLabel-label.Mui-completed {
        margin: 0;
        color: ${({ theme }) => theme.palette.neutralSecodary.main};
      }

      .MuiStepLabel-label.Mui-active {
        margin: 0;
        color: ${({ theme }) => theme.palette.neutral.main};
      }

      .MuiStepLabel-iconContainer {
        .MuiStepIcon-root {
          color: ${({ theme }) => theme.palette.neutral.main};
          margin-right: ${({ theme }) => theme.spacing(0.5)};
        }
      }

      .MuiStepConnector-root {
        display: none;
      }

      &.Mui-active .MuiStepLabel-label {
        color: ${({ theme }) => theme.palette.neutral.main};
      }
    }
  }
`;

const BreadcrumbStepper = () => {
  const steps = useMemo(() => ['canal', 'parametrização', 'resultados'], []);
  const activeStep = useSelector((state) => state.step.value);
  const router = useRouter();

  useEffect(() => {
    const path = normalizeText(steps[activeStep]);
    router.push(`/${path}`);
  }, [activeStep, router, steps]);

  return (
    <StyledStepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel
            icon={<NavigateNextIcon />}
            classes={{
              labelContainer: 'MuiStepLabel-labelContainer',
              label: 'MuiStepLabel-label',
              iconContainer: 'MuiStepLabel-iconContainer'
            }}
            sx={{
              color: activeStep === index ? 'neutral.main' : 'neutralSecodary.main',
              '&.MuiStepLabel-active': {
                color: 'neutral.main',
              }
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default BreadcrumbStepper;