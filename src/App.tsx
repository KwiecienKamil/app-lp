import { Canvas } from "@react-three/fiber"
import {StudentModel} from "./components/StudentModel.tsx"
import { Environment, Lightformer } from "@react-three/drei"
import "./styles/App.css"
import Navbar from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import HowToUse from "./components/HowToUse.tsx"
import Footer from "./components/Footer.tsx"


const App = () => {
  return (
    <div id="app-wrapper">
      <Navbar />
      <Home />
      <HowToUse />
      <Footer />
        <figure
      >
        <Canvas
          shadows
          camera={{ position: [10, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <StudentModel scale={1.5} />
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </div>
  )
}

export default App
