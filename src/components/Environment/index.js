/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {BackSide} from 'three';

export default () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
            <meshPhongMaterial color={0xff000f} attach="material" side={BackSide} metalness={0.4} />
        </mesh>
    )
}