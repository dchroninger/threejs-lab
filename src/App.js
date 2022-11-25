import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <Sky />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
}

export default App;
