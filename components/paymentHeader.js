import { Box, Button, Typography } from "@material-ui/core";

function PaymentHeader() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h5" fontWeight={500}>
        Sell Records - Invoices
      </Typography>
      <Box
        display="flex"
        gap={3}
        alignItems="center"
        justify="center"
        paddingX={4}
      >
        <Button>
          <div>
            <Typography variant="p" fontWeight={500}>
              Invoice Reminder
            </Typography>
          </div>
        </Button>
        <Button>Import</Button>
        <Button>Export</Button>
      </Box>
    </Box>
  );
}

export { PaymentHeader };
