import Paragraph from './components/Paragraph';
import Anchor from './components/Anchor';
import Image from './components/Image';
import ImageProp from './components/ImageProp';
import Popover from './components/Popover';

import logo from "./logo.svg";

import './App.scss';
import ChangableButton from './components/ChangableButton';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageProp src={logo} />
        <Image />
        <Paragraph>Hello World!</Paragraph>
        <Paragraph>Developed by Sinem Varol</Paragraph>
        <Anchor />
      </header>
      <section>
        <Popover buttonText="Click">Lorem ipsum dolor sit amet</Popover>
        <ChangableButton/>

        <Button/>

      </section>
    </div>
  );
}

export default App;
