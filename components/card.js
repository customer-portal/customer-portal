import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

function DetailsCard({ title, value }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">{value}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailsCard;
