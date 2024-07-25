/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from 'three'
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import styles from './SoldierBackground.module.scss';
import Loading from "../Loading/Loading";
import { view1024, view700 } from "../../constants/Responsive";
import { useMediaQuery } from "../MediaQuery/MediaQuery";
import { pcTopPoint, pcPointChar, tabletPointChar, mobilePointChar, charSizePer, tabletSize, mobileSize, charPositionPer, 
    tabletPosition, mobilePosition, charAngelPer, tabletAngel, mobileAngel } from "../../constants/Move3D";

const char = "/assets/file3D/soldiers.glb";

const SoldierBackground = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className={styles.middleBackground}>
                <div className={styles.middleBackgroundRelative}>
                    <div className={styles.backgroundCharacter} >
                        <Char3DViewer />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

const Scene = () => {
    const character = useGLTF(char);
    return <primitive object={character.scene} dispose={null} />
}

const Char3DViewer = () => {
    useGLTF.preload(char)
    try {
        const ref = useRef<any>();
        return (
            <Canvas
                shadows
                gl={{ preserveDrawingBuffer: true }}
                dpr={[1, 1.5]}
                camera={{ fov: 45, near: 0.3, position: [0, 0, 150]  }}
            >
                <ambientLight intensity={0.8} />
                <pointLight intensity={1} position={[0, 6, 0]} />
                <Suspense fallback={null}>
                    <Center>
                        <State>
                            <Scene />
                        </State>
                    </Center>
                </Suspense>
                <OrbitControls
                    ref={ref}
                    enablePan={false}
                />
            </Canvas>
        )
    }catch (e) {
        return null
    }
}

type StateProps = {
    children: any
}

const State = ({children}: StateProps) => {
    const isTablet = useMediaQuery(view1024);
    const isMobile = useMediaQuery(view700);
    const camera = useThree((state) => state.camera);
    const outer = useRef<any>();
    const inner = useRef<any>();
    const [{ radius, width, height }, set] = useState({
      radius: 0,
      width: 0,
      height: 0,
    });
    const [centerData, setCenterData] = useState<any>();
    const [points, setPoints] = useState<any>([]);
    const [topPoint, setTopPoint] = useState<any>();
    const [sizePoint, setSizePoint] = useState<any>([]);
    const [positionPoint, setPositionPoint] = useState<any>([]);
    const [angelPoint, setAngelPoint] = useState<any>([]);

    useLayoutEffect(() => {
        if(isMobile) {
            setPoints(mobilePointChar);
            setTopPoint(window.innerHeight * 0.5);
            setSizePoint(mobileSize);
            setPositionPoint(mobilePosition);
            setAngelPoint(mobileAngel);
        } else if(isTablet) {
            setPoints(tabletPointChar);
            setTopPoint(window.innerHeight * 0.5);
            setSizePoint(tabletSize);
            setPositionPoint(tabletPosition);
            setAngelPoint(tabletAngel);
        } else {
            setPoints(pcPointChar);
            setTopPoint(pcTopPoint);
            setSizePoint(charSizePer);
            setPositionPoint(charPositionPer);
            setAngelPoint(charAngelPer);
        }
    }, [isMobile, isTablet])

    useLayoutEffect(() => {
      outer.current.updateWorldMatrix(true, true)
      const box3 = new THREE.Box3().setFromObject(inner.current)
      const center = new THREE.Vector3()
      const sphere = new THREE.Sphere()
      const height = box3.max.y - box3.min.y
      const width = box3.max.x - box3.min.x
      box3.getCenter(center)
      box3.getBoundingSphere(sphere)
      set({
        radius: sphere.radius,
        width,
        height,
      })
      setCenterData(center);
      outer.current.position.set(-center.x, -center.y + height / 2, -center.z);
    }, [children])
    
    document.addEventListener("scroll", () => {
        if(!outer.current || !inner.current) {
            return;
        }
        const heightCenter = window.innerHeight * 0.5;
        const currentOffset = window.scrollY + heightCenter;
        if(currentOffset <= points[1]) {
            handleCharLeft(1);
        } else if(currentOffset <= points[2]) {
            handleCharLeft(2);
        } else if(currentOffset <= points[3]) {
            handleCharLeft(3);
        } else if(currentOffset <= points[4]) {
            handleCharLeft(4);
        } else if(currentOffset <= points[5]) {
            handleCharLeft(5);
        } else if(currentOffset <= points[6]) {
            handleCharLeft(6);
        } else if(currentOffset <= points[7]) {
            handleCharLeft(7);
        } else if(currentOffset <= points[8]) {
            handleCharLeft(8);
        } else if(currentOffset <= points[9]) {
            handleCharLeft(9);
            outer.current.visible  = true;
        } else if(currentOffset > points[9]) {
            outer.current.visible  = false;
        }
    }, false)

    const handleCharLeft = (nextNumber: number) => {
        const box3 = new THREE.Box3().setFromObject(inner.current)
        // const height = box3.max.y - box3.min.y
        const center = new THREE.Vector3()

        if(positionPoint[nextNumber] > positionPoint[nextNumber - 1]) {
            const x = nextNumber === 1 ? getBiggerSetResultFirst(positionPoint, nextNumber) : getBiggerSetResult(positionPoint, nextNumber);
            outer.current.position.set(x, -centerData.y + height / 2, -center.z);
        } else {
            const x = getSmallerSetResult(positionPoint, nextNumber);
            outer.current.position.set(x, -centerData.y + height / 2, -center.z);
        }

        if(angelPoint[nextNumber] > angelPoint[nextNumber - 1]) {
            const angel = getBiggerSetResult(angelPoint, nextNumber);
            outer.current.rotation.set(0, angel, 0);
        } else {
            const angel = nextNumber === 1 ? getBiggerSetResultFirst(angelPoint, nextNumber) : getSmallerSetResult(angelPoint, nextNumber);
            outer.current.rotation.set(0, angel, 0);
        }

        if(sizePoint[nextNumber] > sizePoint[nextNumber - 1]) {
            const size = nextNumber === 1 ? getBiggerSetResultFirst(sizePoint, nextNumber) : getBiggerSetResult(sizePoint, nextNumber);
            camera.position.set(0, 0, radius * size)
        } else {
            const size = getSmallerSetResult(sizePoint, nextNumber);
            camera.position.set(0, 0, radius * size)
        }
    }

    const getBiggerSetResult = (charPer: any, nextNumber: number) => {
        const percentResult = (charPer[nextNumber] - charPer[nextNumber - 1]) / (points[nextNumber] - points[nextNumber - 1]);
        const result = charPer[nextNumber - 1] + percentResult * (window.scrollY + topPoint - points[nextNumber - 1]);
        return result < charPer[nextNumber - 1] ? charPer[nextNumber - 1] : result;
    }

    const getSmallerSetResult = (charPer: any, nextNumber: number) => {
        const percentResult = (charPer[nextNumber - 1] - charPer[nextNumber]) / (points[nextNumber] - points[nextNumber - 1]);
        const result = charPer[nextNumber - 1] - percentResult * (window.scrollY + topPoint - points[nextNumber - 1]);
        return result > charPer[nextNumber - 1] ? charPer[nextNumber - 1] : result;
    }

    const getBiggerSetResultFirst = (charPer: any, nextNumber: number) => {
        const percentResult = (charPer[nextNumber] - charPer[nextNumber - 1]) / (points[nextNumber] - points[nextNumber - 1] - 480);
        const result = charPer[nextNumber - 1] + percentResult * window.scrollY;
        return result < charPer[nextNumber - 1] ? charPer[nextNumber - 1] : result;
    }

    useLayoutEffect(() => {
      const y = radius / (height > width ? 1.5 : 2.5)
      camera.position.set(0, 0, radius * sizePoint[0])
      camera.near = 0.1
      camera.far = Math.max(5000, radius * 4)
      camera.lookAt(0, y, 0)
    }, [radius, height, width])

    return (
      <group ref={outer} dispose={null}>
        <group ref={inner} dispose={null}>{children}</group>
      </group>
    )
}

export default SoldierBackground;