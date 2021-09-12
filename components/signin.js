import styled from "styled-components";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    z-index: -1;
    position: absolute;
  }
  .card {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 300px;
  }
  .title {
    font-size: 24px;
  }
`;

const Signin = () => {
  return (
    <Home>
      <Card className="card">
        <CardContent>
          <Image src="/deskera.svg" width="100" height="100" />
          <Typography className="title" color="secondary">
            Loading
          </Typography>
          <CardActions className="card">
            <CircularProgress color="secondary" />
          </CardActions>
        </CardContent>
      </Card>
    </Home>
  );
};

export default Signin;
