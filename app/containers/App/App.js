import React, { PureComponent } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
// import InstagramEmbed from 'react-instagram-embed';
// import { getUserInfo, getImages, getImagesTemp } from 'utils/helpers';
// import { Entity, Scene } from 'aframe-react';
const accessToken = '1681818728.1677ed0.68d03c9c990a4549b1fdaa9e05bb852c';

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
    // getImagesTemp('nilson_kos')
     //  .then((data) => {
     //    this.setState({
     //      images: data // TODO add images instagramm
     //    });
     //  })
		// this.setState({renderBox: true});
    this.renderInsta();
	}

	renderInsta = () => {
    fetch('https://api.instagram.com/?hl=ru?access_token=1681818728.1677ed0.68d03c9c990a4549b1fdaa9e05bb852c', {
      method: 'get',
      mode: 'no-cors',
    }).then((res) => {
      console.log('Works!', res);
    });
  };
  //
  // renderPost = () => (
   //  // https://github.com/sugarshin/react-instagram-embed
   //  <InstagramEmbed
   //    url='https://instagr.am/p/Zw9o4/'
   //    maxWidth={320}
   //    hideCaption={false}
   //    containerTagName='div'
   //    protocol=''
   //    onLoading={() => {}}
   //    onSuccess={() => {}}
   //    onAfterRender={() => {}}
   //    onFailure={() => {}}
   //  />
  // );
  //
	// enterHandle = () => {
	// 	console.log('enterHandle');
	// 	document.getElementById('anim').setAttribute();
	// }

	// animationCompleteHandle = (e) => {
	// 	console.log('animationCompleteHandle');
	// 	console.log(this);
	// 	console.log(e);
	// }
  //
	// createBoxes = () => {
	// 	let images = this.state.images;
	// 	let coords = [];
	// 	let blockId = 0;
	// 	for (let i = 0; i < images.length; i++) {
	// 		coords.push({x: -1.5 * 3, y: 2, z: -i*3, id: blockId, src:images[i]});
	// 		blockId += 1;
	// 	}
	// 	for (let i = 0; i < images.length; i++) {
	// 		coords.push({x: 1.5 * 3, y: 2, z: -i*3, id: blockId, src:images[i]});
	// 		blockId += 1;
	// 	}
	// 	let params = {}
	// 	params.shift = (-(((images.length - 3)) * 3)).toString();
	// 	params.duration = (images.length * 1000).toString();
	// 	console.log(params);
	// 	return (<Entity primitive='a-box' position="0 0 0" id="anim123"
	// 				animation={`property: position; dur: 16000; to: 0 0 ${params.shift}`}
	// 				events={{
	// 					animationbegin: this.animationCompleteHandle,
	// 					animationcomplete: this.animationCompleteHandle
	// 				}}
	// 	>
	// 	{coords.map((pos) => (
	// 		<Entity
	// 			visible="true"
	// 			primitive="a-box"
	// 			height="4"
	// 			widht="3"
	// 			depth="3"
	// 			key={pos.id}
	// 			position={`${pos.x} ${pos.y} ${pos.z}`}
	// 			src={`${pos.src}`}
	// 			events={{
	// 				mouseenter:this.enterHandle
	// 			}}
	// 			/>
	// 		)
	// 	)}
	// 	</Entity>);
	// }

  // changeColor = () => {
  //   const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  //   this.setState({
  //     color: colors[Math.floor(Math.random() * colors.length)]
  //   });
  // };

  render () {
    return (
     <div>
        Hello
     </div>
    );
  }
}

export default App;
