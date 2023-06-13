import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Link, Typography } from '@mui/material';
import React from 'react';

const TimelineComponent = () => {
    const timelineData = {
        campaignChannel: 'SMS',
        toneVoice: 'Formal',
        creativityTemperature: 8.9,
        characterLimit: 116,
        paragraphs: 1,
        playground: 'Informação da campanha',
        targetAudience: 'Público alvo',
        keyWords: 'Controle',
        mentalTriggers: ['Necessidade', 'streaming', 'dados'],
        link: 'https://site.com',
        useEmojis: true,
    };

    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Campaign Channel: {timelineData.campaignChannel}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Tone of Voice: {timelineData.toneVoice}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Creativity Temperature: {timelineData.creativityTemperature}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Character Limit: {timelineData.characterLimit}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Paragraphs: {timelineData.paragraphs}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Playground: {timelineData.playground}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Target Audience: {timelineData.targetAudience}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Keywords: {timelineData.keyWords}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Mental Triggers:</Typography>
                    {timelineData.mentalTriggers.map((trigger, index) => (
                        <Typography key={index} variant="subtitle1">{trigger}</Typography>
                    ))}
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Link: <Link href={timelineData.link} target="_blank">{timelineData.link}</Link></Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">Use Emojis: {timelineData.useEmojis ? 'Yes' : 'No'}</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default TimelineComponent;