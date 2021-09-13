import { Box, Card, CardContent, Typography } from "@material-ui/core"

function CardList() {
    return (
        <Box display="flex">
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                       <h></h>
                    </Typography>
                    <Typography color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
            <Card />
            <Card />
        </Box>
    )
}

export default CardList
