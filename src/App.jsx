import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Images } from "./components/Images";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
  // Front
  {
    position: [0, -1, 1],
    rotation: [0, -Math.PI, 0],
    url: "Daniel_Pettersson_CV.png",
  },
  // Back
  /*   { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) }, */

  // Left
  {
    position: [-1.75, -1, 0.25],
    rotation: [0, Math.PI / 1.5, 0],
    url: pexel(327482),
  },
  {
    position: [-2.15, -1, 1.5],
    rotation: [0, Math.PI / 1.5, 0],
    url: pexel(325185),
  },
  /*   {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(358574),
  }, */
  // Right
  {
    position: [1.75, -1, 0.25],
    rotation: [0, -Math.PI / 1.2, 0],
    url: pexel(227675),
  },
  {
    position: [2.15, -1, 1.5],
    rotation: [0, Math.PI / 1.2, 0],
    url: pexel(911738),
  },
  /*   {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(1738986),
  }, */
];

function App() {
  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
        style={{
          touchAction: "none",
        }}
      >
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <Experience />
        <Images images={images} />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
