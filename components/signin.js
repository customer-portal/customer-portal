import styled from "styled-components";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CircularProgress,Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {
  providers,
  signIn,
  getSession,
  csrfToken,
  useSession,
} from "next-auth/client";

const Home = styled.div`
  width: 99vw;
  height: 98vh;
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
            Customer Portal
          </Typography>
          <CardActions className="card">
            <Button
              variant="contained"
              color="secondary"
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Home>
  );
};

export default Signin;
