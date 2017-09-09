import React, { PureComponent } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import InstagramEmbed from 'react-instagram-embed';
import { getUserInfo, getImages } from 'utils/helpers';
import { Entity, Scene } from 'aframe-react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
			color: 'red',
			renderBox: false,
      images: [],
		};
  }

	componentDidMount() {
    // getImages(username)
    //   .then((data) => {
    //     this.setState({
    //       images: data.images // TODO add images instagramm
    //     });
    //   })
		this.setState({renderBox: true});
	}

  renderPost = () => (
    // https://github.com/sugarshin/react-instagram-embed
    <InstagramEmbed
      url='https://instagr.am/p/Zw9o4/'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  );

	createBoxes = () => {
		let images = [];
		for (let i = 0; i < 10; i++) {
			images.push('http://i.imgur.com/PPzncqLl.png');
		}
		let coords = [];
		let blockId = 0;
		for (let i = 0; i < 10; i++) {
			coords.push({x: -1.5 * 3, y: 2, z: -i*3, id: blockId, src:images[i]});
			blockId += 1;
		}
		for (let i = 0; i < 10; i++) {
			coords.push({x: 1.5 * 3, y: 2, z: -i*3, id: blockId, src:images[i]});
			blockId += 1;
		}
		return coords.map((pos) => (
			<Entity
				primitive="a-box"
				height="4"
				widht="3"
				depth="3"
				key={pos.id}
				position={`${pos.x} ${pos.y} ${pos.z}`}
				src={`${pos.src}`}
				/>
			)
		);
	}

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
				{this.state.renderBox && this.createBoxes()}
      </Scene>
    );
  }
}

export default App;
