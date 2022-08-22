import { LayoutProps } from '@/models/index';
import { Box, Container, Stack } from '@mui/system';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Stack>
  );
}
