import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={50} damping={0.8}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.07} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
