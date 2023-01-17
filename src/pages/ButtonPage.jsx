import Button from "../components/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoGear,
  GoPlay,
} from "react-icons/go";

function ButtonPage() {

  return (
    <div>
      <div>
        <Button danger outline>
          <GoBell />
          Bell button
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Another button
        </Button>
      </div>
      <div>
        <Button primary>
          <GoDatabase />
          Click me!
        </Button>
      </div>
      <div>
        <Button success>
          <GoGear />
          Remove from cart
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          <GoPlay />
          Log out
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
