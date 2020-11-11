/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshLambertMaterial color={0xffffff} attach="material"  />
      </mesh>
    );
  };

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.4} position={[0, 0, 0]} color={0xfeeed099} />
    </group>
  );
};
