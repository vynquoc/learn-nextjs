import { Button, Container, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import avatar from '../../images/avatar.png';

export function HeroSection() {
  return (
    <Box component='section' pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={8}
        >
          <Box>
            <Typography component='h1' variant='h3' fontWeight='bold' mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography my={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque molestias
              minima! Aspernatur vero suscipit enim veniam, nesciunt corporis cupiditate
            </Typography>
            <Button variant='contained'>Download Resume</Button>
          </Box>
          <Box minWidth='240px'>
            <Image src={avatar} layout='responsive' alt='avatar' />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
