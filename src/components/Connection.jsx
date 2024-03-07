import { globalTitle } from "../constants";
import Button from "./Button";
import TitleComponent from "./TitleComponent";

const Connection = () => {
  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-between md:items-center md:max-w-7xl md:p-6 gap-3 bg-[#f0eeef]">
      <div className="hidden justify-center md:flex p-4">
        <img
          src="public/images/group-corners-desktop.png"
          alt="Group Image in corners"
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-4 p-4">
        <TitleComponent title={globalTitle.connection} />
        <div className="flex justify-center md:hidden">
          <img
            src="public/images/group-corners-mobile.png"
            alt="Group Image in corners"
          />
        </div>
        <div className="flex flex-col max-w-md p-2 text-sm leading-6 text-[#6C6C6C]">
          <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <br />
          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.
          </p>
          <br />
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          </p>
          <br />
          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.
          </p>
          <br />
          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien.
          </p>
          <br />
          <p>Cras mattis varius mollis.</p>
        </div>
        <div className="hidden justify-start items-center p-2 min-w-sm max-w-4xl md:flex">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Connection;
